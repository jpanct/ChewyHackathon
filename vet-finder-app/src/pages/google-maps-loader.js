const googleMapsLoader = (params) => {
    const google = window.google || {};
    const maps = google.maps || {};
    const importLibrary = maps.importLibrary || {};
  
    const libraries = new Set();
    const urlSearchParams = new URLSearchParams();
  
    const load = () =>
      new Promise(async (resolve, reject) => {
        const script = document.createElement("script");
        urlSearchParams.set("libraries", [...libraries].join(","));
        for (const key in params) {
          if (params.hasOwnProperty(key)) {
            urlSearchParams.set(
              key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`),
              params[key]
            );
          }
        }
        urlSearchParams.set("callback", "google.maps.__ib__");
        script.src =
          `https://maps.googleapis.com/maps/api/js?` + urlSearchParams.toString();
        maps.__ib__ = resolve;
        script.onerror = () =>
          reject(Error("The Google Maps JavaScript API could not be loaded."));
        script.nonce = document.querySelector("script[nonce]")?.nonce || "";
        document.head.appendChild(script);
      });
  
    return (...librariesToLoad) =>
      librariesToLoad.reduce(
        (prev, lib) => (libraries.add(lib), prev),
        load()
      );
  };
  
  export default googleMapsLoader;