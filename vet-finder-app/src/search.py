import json
  
with open('clinic-info.json') as json_file:
    f = json.load(json_file)

# for i in range(len(f)):
#     print(f[i]['adress2'])
  
def search(text):
    if not text:
        return "No input"
        
    g = []
    for i in range (len(f)):
        if text.upper() in f[i]['clinic_name'].upper() or text.upper() in f[i]['city'] or text in f[i]['zip'] or text.upper() in f[i]['address1']:
            g.append(f[i])
    return g
        
print((search('westford')))