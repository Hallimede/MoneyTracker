interface ISummaryData {
    catagory: string,
    amount: number
}

type Summary = {
    summary: ISummaryData[]
}



interface IRecordItem {
    catagory: number,
    amount: number,
    date: string
}

type RecordsState = {
    records: IRecordItem[]
}

type RecordsAction = {
    type: string,
    records: IRecordItem[]
}

type RecordsDispatcher = (args: RecordsAction) => RecordsAction
