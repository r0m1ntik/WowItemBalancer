import packageJson from '../../../../package.json';
import React from 'react'

function FooterContainer() {
    const appVersion = packageJson.version;
    const repositoryLink = 'https://github.com/r0m1ntik/WowItemBalancer';

    const openLinkInBrowser = () => {
        window.open(repositoryLink, '_blank');
    };

    return (
        <footer className="toolbar toolbar-footer footerTitle">
            <h1 className="title" onClick={openLinkInBrowser}>
                {repositoryLink} v{appVersion}
            </h1>
        </footer>
    )
}

export default FooterContainer;