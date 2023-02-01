interface ICateroty {
    label: string;
    key: number;
}

export class Category {

    static ITEMS: Array<ICateroty> = [
        {
            label: 'Bills',
            key: 1
        },
        {
            label: 'Grocery',
            key: 2
        },
        {
            label: 'Health',
            key: 3
        },
        {
            label: 'Travel',
            key: 4
        },
        {
            label: 'Others',
            key: 5
        }]

    static getCategoryString(key: number, defaultStr: string): string {
        const find = (Category.ITEMS.find(i => i.key === key))?.label
        const result = find ? find : defaultStr;
        return result;

    }
}