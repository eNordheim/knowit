const MAX_COUNTER = 20;

export default function RepositoryTableMapper(items) {
    const processedData = [];
    let counter = 0;
    let page = [];

    // eslint-disable-next-line camelcase
    items.forEach(({ name, svn_url, size, open_issues, watchers }) => {
        page.push({ name, url: svn_url, size, open_issues, watchers });

        if (++counter === MAX_COUNTER) {
            processedData.push(page);
            page = [];
            counter = 0;
        }
    });

    return processedData;
}
