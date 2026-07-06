import json
with open('package.json', 'r') as f:
    data = json.load(f)
# Remove keys that contain '@' after the first '/'? Actually we want to keep only those that are valid package names (no extra @version)
# We'll just delete any key that contains '@' and where the value starts with 'npm:'
new_deps = {}
for k, v in data.get('dependencies', {}).items():
    if not (k.count('@') > 1 and isinstance(v, str) and v.startswith('npm:')):
        new_deps[k] = v
data['dependencies'] = new_deps
# Also do the same for devDependencies and peerDependencies just in case
for dep in ['devDependencies', 'peerDependencies']:
    if dep in data:
        new_deps2 = {}
        for k, v in data[dep].items():
            if not (k.count('@') > 1 and isinstance(v, str) and v.startswith('npm:')):
                new_deps2[k] = v
        data[dep] = new_deps2
with open('package.json', 'w') as f:
    json.dump(data, f, indent=2)
