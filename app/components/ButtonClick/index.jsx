'use client';

export const ButtonClick = () => {
  const handleClick = () => {
    console.log('click');
    window.postMessage('closeWebView', '*');
  };
  return <button onClick={handleClick}>Send postmessage</button>;
};
