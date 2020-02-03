let RootBundleProcess = require('../obj/src/container/RootBundleProcess').RootBundleProcess;

try {
    new RootBundleProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}
