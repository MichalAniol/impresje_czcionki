



let fitTesxOnSash = (item) => {
    let id = item.id;
    let part = document.querySelector('#' + id + ' .major_part');
    let txt = document.querySelector('#' + id + ' .text');

    let h = part.getBoundingClientRect().height;

    txt.style.setProperty('font-size', (h / 13) + 'px');
    // txt.style.setProperty('line-height', (h / 220));
}

const elems = document.querySelectorAll('.let_anim');


for (let i = 0; i < elems.length; i++) {
    e = elems[i];
    e.id = 'aTgw_' + i;
    fitTesxOnSash(e);
}



document.addEventListener('keypress', e => {
    // let key = e.code;
    // console.log('%c key:', 'background: #ffcc00; color: #003300', e)

    const elems = document.querySelectorAll('.let_anim');
    let list = [];
    for (let e of elems) {
        let pos = e.getBoundingClientRect();
        list.push([pos.top, pos.bottom]);
        let test = e.querySelector('.text').innerHTML;
        console.log('%c test:', 'background: #ffcc00; color: #003300', test)
    }
    console.table(list)

});

setInterval(() => {
    for (let e of elems) {
        let pos = e.getBoundingClientRect();
        if (e.getAttribute('data-a') != 'on'
            && ((pos.top > 0 && pos.top < window.innerHeight)
                || (pos.bottom > 0 && pos.bottom < window.innerHeight))) {

            e.setAttribute('data-a', 'on');
            let anim = document.querySelector('#' + e.id + ' .glow');
            let time = (3 + (Math.random() * 4));
            console.log('%c e.id:', 'background: #ffcc00; color: #003300', e.id, time)

            anim.style.setProperty('animation-duration', time + 's')
            anim.style.display = 'block';
        }
    }
}, 100);







const title_hendlers = document.querySelectorAll('.title_hendler');

for (let th of title_hendlers) {
    let h1 = th.querySelector('h1');
    let hend_text = th.querySelector('.hend_text');
    let title = h1.innerHTML.split(' ');

    h1.style.setProperty('animation-name', 'wait_for_load');
    h1.style.setProperty('animation-iteration-count', 'infinite');
    hend_text.style.setProperty('animation-name', 'wait_for_load');
    hend_text.style.setProperty('animation-iteration-count', 'infinite');

    let title2 = hend_text.innerHTML.split(' ');
    hend_text.innerHTML = title2[0];

    if (title.length != 1) {
        let res = title[0];

        res += '<br><b>'
        for (let i = 1; i != title.length; i++) {
            res += ' ' + title[i];
        }
        res += '</b>'
        h1.innerHTML = res;
    } else {
        h1.style.top = '60px';
        title_hendler.style.height = '100px'
    }
}




setTimeout(() => {
    for (let th of title_hendlers) {
        let h1 = th.querySelector('h1');
        let hend_text = th.querySelector('.hend_text');
        h1.style.setProperty('animation-name', 'spread');
        h1.style.setProperty('animation-iteration-count', '1');
        hend_text.style.setProperty('animation-name', 'fade_left');
        hend_text.style.setProperty('animation-iteration-count', '1');
    }
}, 100);

