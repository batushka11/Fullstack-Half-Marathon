const Iconv = require('iconv').Iconv;

function convertCharset(data) {
    let output = `<p>Original text: <textarea cols="20" rows="3">${data.inputString}</textarea></p>`;
    if (typeof data.charsets === 'string') {
        return output + convertString(data.charsets, data.inputString);
    } else {
        data.charsets.forEach((charset) => {
            output += convertString(charset, data.inputString);
        });
        return output;
    }
}

function render(output = '') {
    return `
    <h1>Charset</h1>
    <form action="/" method="POST">
        <label for="inputString">Change charset:</label>
        <input type="text" name="inputString" placeholder="Input string">
        <p>Select charset or several charset:
            <select name="charsets" id="charsets" multiple>
                <option value="UTF-8">UTF-8</option>
                <option value="base64">base64</option>
                <option value="Windows-1252">Windows-1252</option>
            </select>
            <button type="submit">Change charset</button>
            <button type="button" onclick="location.href='/'">Clear</button>
        </p>
    </form>
    ${output}
    `;
}

function convertString(charset, text) {
    if (charset === 'UTF-8') {
        return `<p>${charset}: <textarea cols="20" rows="3">${text}</textarea></p>`;
    }
    if (charset === 'Windows-1252') {
        return `<p>${charset}: <textarea cols="20" rows="3">${new Iconv('UTF-8', charset).convert(text).toString()}</textarea></p>`;
    }
    if (charset === 'base64') {
        return `<p>${charset}: <textarea cols="20" rows="3">${Buffer.from(text).toString('base64')}</textarea></p>`;
    }
    return '';
}

module.exports = { render, convertCharset};