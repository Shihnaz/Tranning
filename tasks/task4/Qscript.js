let fetchText = async () => {
    try {
        let response = await fetch("https://type.fit/api/quotes", {
            method: "GET",
            headers: { Accept: "application/json" },
        });
        console.log(response.status);

        const data = await response.json();
        console.log(data);
         const qtext = data.map((item) => {
            return item.text;
        });
         var par=document.querySelectorAll("p");
         for(let i=0;i<par.length;i++){
           par[i].innerHTML=qtext[i];
         }

    }
    catch (error) {
        console.log(error);
    } }
    fetchText();