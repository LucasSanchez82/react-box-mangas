import React from 'react';

const DownloadArrayToJsonBtn = (props) => {
    const execute = (data) => {
        const jsonData = JSON.stringify(data);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    return (

        <input onClick={() => { execute(props.data) }} type="button" value="download" />
    );
};

export default DownloadArrayToJsonBtn;