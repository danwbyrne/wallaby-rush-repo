## Issue
Following the advice [here](https://github.com/wallabyjs/public/issues/2321#issuecomment-582204059) we can use the auto-config setup for wallaby and have created the `jest.config.js` to support this. The issue is that using `Wallaby > Select Configuration > Automatic Configuration` will just get you 
```bash
[Error] Automatic Jest configuration error: Module jest-cli is not found in '.'
```
since Rush keeps its node_modules in `common/temp/node_modules` instead of root. Following [this](https://github.com/wallabyjs/public/issues/2084#issuecomment-496310600) I tried to configure a `wallaby.js` which only uses `{autoDetect: true}` but adds our nested node_modules to the path but this didn't seem to work either.

To see this works with the node_modules in root:
```
rush cp-modules //copies `./common/temp/node_modules` to ./node_modules`
```
and then run the automatic configuration to see its works exactly how we'd expect.