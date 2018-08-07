import React from "react";

export const Main = (props) => {
    {
        if (props.selectedStock) {
            let defaultX = 50;
            //We can customize below feilds, we can dynamically pass this parameters by setting in props
            let defaultGap = 20;
            let defaultPriceGap = 10; 
            let noOfSlots =8;
            let defaultY = 600;
            let defaultOpenCloseWidth = 8;
            //let zoomLevel = 300;

            let obj, data,openingMarket;
            obj = props.selectedStock;
            data = obj["Time Series (Daily)"];
            
            for (var q in data) {
                if (data.hasOwnProperty(q))  {
                    openingMarket = Math.round(data[q]["1. open"]);
                    break;
                }
            }
           
            let varibaleZoom = defaultY/(defaultPriceGap*noOfSlots);
            let workaround = (openingMarket*varibaleZoom)-(defaultY/2)
            
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var my_gradient = ctx.createLinearGradient(0, 300, 300, 0);
            my_gradient.addColorStop(0, "gray");
            my_gradient.addColorStop(1, "white");
            ctx.fillStyle = my_gradient;
            ctx.fillRect(defaultX, 0, defaultY, defaultY);
            ctx.font = "20px Arial"
            ctx.textBaseline = "top";
            debugger;
            for(let c=0;c<noOfSlots;c++)
            {
                ctx.fillText((openingMarket+((c-(Math.round(noOfSlots/2)))*defaultPriceGap))+"$", 0, defaultY - Number(c*80));
            
            }
          
            let i = 0;
            for (var p in data) {
                if (data.hasOwnProperty(p) && i < 30) {
                    ctx.beginPath();
                    ctx.moveTo((i * defaultGap) + defaultGap + defaultX, (defaultY - (Number(data[p]["1. open"]) *varibaleZoom)+workaround));
                    ctx.lineTo((i * defaultGap) + defaultGap + defaultX - defaultOpenCloseWidth, (defaultY - (Number(data[p]["1. open"]) *varibaleZoom)+workaround));
                    ctx.moveTo((i * defaultGap) + defaultGap + defaultX, (defaultY - (Number(data[p]["4. close"]) *varibaleZoom)+workaround));
                    ctx.lineTo((i * defaultGap) + defaultGap + defaultX + defaultOpenCloseWidth, (defaultY - (Number(data[p]["4. close"]) *varibaleZoom) +workaround));
                    ctx.moveTo((i * defaultGap) + defaultGap + defaultX, (defaultY - (Number(data[p]["2. high"])*varibaleZoom) + workaround));
                    ctx.lineTo((i * defaultGap) + defaultGap + defaultX, (defaultY - (Number(data[p]["3. low"]) *varibaleZoom) +workaround));
                    ctx.lineWidth = 1;
                    if (Number(data[p]["1. open"]) < Number(data[p]["4. close"])) {
                        ctx.strokeStyle = 'green';
                    } else {
                        ctx.strokeStyle = 'red';
                    }
                    ctx.closePath();
                    ctx.stroke();
                    i = i + 1;
                }

            }
        }
    }
    return (
        <div className="main">
            <canvas id="myCanvas" width="1300" height="630" >
            </canvas>
        </div>);
};

