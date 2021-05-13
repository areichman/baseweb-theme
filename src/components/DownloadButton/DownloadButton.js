// Based on:
// https://github.com/sindresorhus/multi-download
// http://jsfiddle.net/diegolamonica/ssk8z9pa/

import { Button } from 'baseui/button'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function download(file){
  const a = document.createElement('a');
	a.download = file.name;
	a.href = file.url;
	a.style.display = 'none';
	document.body.append(a);
	a.click();
	await delay(100);
	a.remove();
}

function DownloadButton() {
  const files = [
    {name: 'a.txt', url: `data:text/plain;charset=utf8,${encodeURIComponent('Hello a')}`},
    {name: 'b.txt', url: `data:text/plain;charset=utf8,${encodeURIComponent('Hello b')}`},
  ]

  const handleClick = async () => {
    for (const [index, file] of files.entries()) {
      await delay(index * 500)
      download(file)
    }
  }

  return (
    <Button onClick={handleClick}>
      Download All Files
    </Button>
  )
}

export default DownloadButton
