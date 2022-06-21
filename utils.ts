const delay = (ms: number): Promise<null> => new Promise(res => setTimeout(res, ms));

export { delay };