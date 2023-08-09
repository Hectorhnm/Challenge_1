var btn_encrypt = document.querySelector(".btn_encrypt");
var btn_decrypt = document.querySelector(".btn_decrypt");
var paragraph_container = document.querySelector(".paragraph_container");
var btn_copy = document.querySelector(".btn_copy");
var result = document.querySelector(".result_text")

btn_encrypt.onclick = encrypt;
btn_decrypt.onclick = decrypt;

function encrypt(){
    hidefront();
    var textbox = recovertext()
    paragraph_container.textContent = encrypttext(textbox)
}

function decrypt(){
    hidefront();
    var textbox = recovertext()
    paragraph_container.textContent = decrypttext(textbox)
}
function recovertext(){
    var textbox = document.querySelector(".textbox");
    return textbox.value
}

function hidefront(){
    paragraph_container.classList.add(".hide");
}

function encrypttext(message){
    var text = message;
    var finaltext = "";

    for (var i = 0; i < text.length; i++){
        if (text[i] == "a"){
            finaltext = finaltext + "ai"
        }
        else if (text[i] == "e"){
            finaltext = finaltext + "enter"
        }
        else if (text[i] == "i"){
            finaltext = finaltext + "imes"
        }
        else if (text[i] == "o"){
            finaltext = finaltext + "ober"
        }
        else if (text[i] == "u"){
            finaltext = finaltext + "ufat"
        }
        else {
            finaltext = finaltext + text[i]
        }
    }
    return finaltext;
}

    function decrypttext(message){
        var text = message;
        var finaltext = "";
    
        for (var i = 0; i < text.length; i++){
            if (text[i] == "a"){
                finaltext = finaltext + "a"
                i = i+1;
            }
            else if (text[i] == "e"){
                finaltext = finaltext + "e"
                i = i+4;
            }
            else if (text[i] == "i"){
                finaltext = finaltext + "i"
                i = i+3;
            }
            else if (text[i] == "o"){
                finaltext = finaltext + "o"
                i = i+3;
            }
            else if (text[i] == "u"){
                finaltext = finaltext + "u"
                i = i+3;
            }
            else {
                finaltext = finaltext + text[i];
            }
        }
        return finaltext;
    }

    /const btn_copy = document.querySelector(".btn_copy");/
    btn_copy.onclick = copy;

    function copy(){
        navigator.clipboard.writeText(paragraph_container.textContent);
    }