const SEO = ({ title, url, description }) => {
    return (
        <div>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />
            <meta charSet='utf-8' />
            <meta name='description' content={description}></meta>
            <meta property='og:site_name' content={title} />
            <meta property='og:url' content={url} />
            <meta property='og:type' content='website' />
            <meta property='og:locale' content='ru' />
            <title>{title}</title>
            <link rel='icon' href='/favicon.ico' />
        </div>
    );
};

export default SEO;
