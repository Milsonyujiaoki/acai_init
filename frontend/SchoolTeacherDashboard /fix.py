import json
with open('package.json', 'r') as f:
    data = json.load(f)

def clean_deps(obj):
    if isinstance(obj, dict):
        to_delete = []
        for k, v in obj.items():
            if isinstance(v, str) and '@' in k and v.startswith('npm:'):
                to_delete.append(k)
            else:
                clean_deps(v)
        for k in to_delete:
            del obj[k]
    elif isinstance(obj, list):
        for item in obj:
            clean_deps(item)

clean_deps(data)
with open('package.json', 'w') as f:
    json.dump(data, f, indent=2)
