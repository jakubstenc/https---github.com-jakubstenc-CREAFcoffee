export const STORAGE_KEY = 'creaf_coffee_tab';

export const getTab = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
};

export const createTab = (username) => {
    const newTab = { username, coffees: 0, history: [] };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTab));
    return newTab;
};

export const addCoffee = () => {
    const tab = getTab();
    if (!tab) return null;

    tab.coffees += 1;
    tab.history.push({ type: 'add', date: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tab));
    return tab;
};

export const clearTab = () => {
    // We don't delete the user, just reset the debt
    const tab = getTab();
    if (!tab) return null;

    const debt = tab.coffees;
    tab.coffees = 0;
    tab.history.push({ type: 'settle', amount: debt, date: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tab));
    return tab;
};
