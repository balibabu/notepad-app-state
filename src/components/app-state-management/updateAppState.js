export function updateAppState(setApp, newValue, hierarchyString) { // eg. hierarchy='views note button'
    const hierarchy=hierarchyString.split(' ');
    setApp((prev) => {
        let updatedApp = { ...prev };
        let current = updatedApp;

        for (let i = 0; i < hierarchy.length - 1; i++) {
            const key = hierarchy[i];

            if (current.hasOwnProperty(key)) {
                current = current[key];
            } else {
                console.log('Please provide correct hierarchy');
                return prev;
            }
        }

        const lastKey = hierarchy[hierarchy.length - 1];
        current[lastKey] = newValue;

        return updatedApp;
    });
}
