feedURL = 'https://news.un.org/feed/subscribe/en/news/region/africa/feed/rss.xml';


fetch(feedURL).then((res) => {
  res.text().then((xmlTxt) => {
    
    let doc = new DOMParser().parseFromString(xmlTxt, 'text/xml');
    doc.querySelectorAll('item').forEach((item) => {

      //display title of article
      let h1 = document.createElement('h1');
      h1.textContent = item.querySelector('title').textContent;
      document.querySelector('output').appendChild(h1); 

      //display date of article
      let date = document.createElement('p');
      date.textContent = item.querySelector('pubDate').textContent;
      // remove the time from the date
      date.textContent = date.textContent.slice(0, 16);

      document.querySelector('output').appendChild(date);
      //center date and adjust size 
      date.style.display = "block";
      date.style.textAlign = "left";
      date.style.color = "green";
      date.style.fontSize = "0.7em";
      date.style.marginBottom = "0px";
      date.style.marginTop = "0px";
      date.style.padding = "0px";

      //get image from article
      let imageURL = document.createElement('img');
      imageURL.setAttribute('src', item.querySelector('enclosure').getAttribute('url'));
      document.querySelector('output').appendChild(imageURL);
      //center image and adjust size
      imageURL.style.display = "block";
      imageURL.style.marginLeft = "auto";
      imageURL.style.marginRight = "auto";
      imageURL.style.width = "100%";
      imageURL.style.height = "auto";

      
      //convert image from url to image data
      const convertURIToImageData = (imageURL) => {
        return new Promise((resolve, reject) => {
          if (!imageURL) {
            return reject();
          } 
          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d')
          const image = new Image();
          image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            resolve(context.getImageData(0, 0, canvas.width, canvas.height));
          }
          image.crossOrigin = "Anonymous"; 
          image.src = imageURL;
        });
      }
      const load = async () => {
        const img = await convertURIToImageData(imageURL)
        console.log(img)
      }
      load()

      //display link to article in new tab 
      let link = document.createElement('a');
      link.setAttribute('href', item.querySelector('link').textContent);
      link.setAttribute('target', '_blank');
      link.textContent = item.querySelector('link').textContent;
      document.querySelector('output').appendChild(link);
      //center link and adjust size based on length of the link
      link.style.display = "block";
      link.style.textAlign = "center";
      link.style.color = "green";
      link.style.fontSize = "0.7em";
      if (link.textContent.length > 30) {
        link.style.fontSize = "0.5em";
      }

      //display description of article
      let p = document.createElement('p');
      p.textContent = item.querySelector('description').textContent;
      document.querySelector('output').appendChild(p);

      //display line break
      let hr = document.createElement('hr');
      document.querySelector('output').appendChild(hr);
      
    })
  })
})