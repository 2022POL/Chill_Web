import { useState } from 'react';
import styled from 'styled-components';

function Image() {
  const [imageSrc, setImageSrc] = useState('');

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
      <Wrapper>
            {imageSrc && <img src={imageSrc} alt="preview-img" />}
          <input type="file" onChange={(e) => {
            encodeFileToBase64(e.target.files[0]);
          }} />
      </Wrapper>
  );
}

export default Image;

const Wrapper = styled.div`
 & > img {
  width: 300px;
 }
`