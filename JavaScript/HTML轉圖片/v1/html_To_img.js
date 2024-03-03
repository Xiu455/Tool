/**
 * 函數說明: 將DOM物件 轉為圖片
 * @param {DOM_Objext} element 
 * @param {String} imgName 圖片名稱預設為`Image`
 */
class HtmlToImg {
    constructor(){

    }

    download(element, imgName='Image'){
        element = (element instanceof jQuery)? element[0] : element;

        element.style.position = 'fixed';
        element.style.top = '0';
        element.style.left = '0';

        html2canvas(element, {
            scrollX: 0,
            scrollY: 0,
            width: element.offsetWidth,
            height: element.offsetHeight,
            onrendered: (canvas) => {
                let imgData = canvas.toDataURL();
                let link = document.createElement('a');

                console.log(imgData);

                link.download = `${imgName}.png`;
                link.href = imgData;
                link.click();

                // 清除新增的元素樣式
                element.style = "";
            }
        });
    }

    newWindow(element, imgName='Image'){
        element = (element instanceof jQuery)? element[0] : element;

        element.style.position = 'fixed';
        element.style.top = '0';
        element.style.left = '0';

        html2canvas(element, {
            scrollX: 0,
            scrollY: 0,
            width: element.offsetWidth,
            height: element.offsetHeight,
            onrendered: (canvas) => {
                let img = new Image();
                let imgData = canvas.toDataURL();
                let newWin = window.open("", "_blank");

                img.src = imgData;
                newWin.document.write(img.outerHTML);
                newWin.document.title = "測試";
                newWin.document.close();

                element.style = ""; // 清除新增的元素樣式
                // 在新分頁中顯示圖片
                // newTab.document.write('<img src="' + imgData + '" />');
            }
        });
    }
}

// document.getElementById('downloadButton').addEventListener('click', function() {
//     var element = document.getElementById('main_box');

//     html2canvas(element, {
//         onrendered: (canvas) => {
//             var imgData = canvas.toDataURL(); // 将Canvas转换为base64格式的图片数据

//             // 创建一个 <a> 元素
//             var link = document.createElement('a');
//             link.download = 'myImage.png'; // 指定下载的文件名
//             link.href = imgData; // 设置图片数据作为链接的 href 属性
//             link.click(); // 模拟点击 <a> 元素进行下载
//         }
//     });
// });

// $('#downloadButton').on('click', function() {
//     var element = $('#main_box');

//     html2canvas(element, {
//         onrendered: function(canvas) {
//             let imgData = canvas.toDataURL();

//             let link = document.createElement('a');
//             link.download = 'myImage.png'; // 指定下载的文件名
//             link.href = imgData; // 设置图片数据作为链接的 href 属性
//             link.click(); // 模拟点击 <a> 元素进行下载
//         }
//     });
// });