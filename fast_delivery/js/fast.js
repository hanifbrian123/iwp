document.addEventListener('DOMContentLoaded', function () {
    const tabElements = document.querySelectorAll('.nav-link');
    const selectElement = document.getElementById('navSelect');
    let currentTabPane = document.querySelector('.tab-pane.active');

    function deactivateCurrentTab() {
        currentTabPane.classList.remove('active', 'show', 'masuk');
        currentTabPane.classList.add('hiding')
        document.querySelector('.nav-link.active').classList.remove('active'); 
    }

    function activateTab(targetPane, correspondingLink) {
        targetPane.classList.remove('hiding');
        targetPane.classList.add('active', 'show', 'masuk'); 
        correspondingLink.classList.add('active'); 
        currentTabPane = targetPane; 
    }

    tabElements.forEach(tab => {
        tab.addEventListener('click', function () {
            const targetPane = document.querySelector(this.getAttribute('data-bs-target'));

            if (targetPane !== currentTabPane) {
                deactivateCurrentTab(); 
                activateTab(targetPane, this);
            }

            selectElement.value = this.getAttribute('data-bs-target'); 
        });
    });

    selectElement.addEventListener('change', function () {
        const targetPane = document.querySelector(this.value);
        const correspondingLink = document.querySelector(`.nav-link[data-bs-target="${this.value}"]`);

        if (targetPane !== currentTabPane) {
            deactivateCurrentTab(); 
            activateTab(targetPane, correspondingLink); 
        }
    });
});

const selectElement = document.getElementById('navSelect');

selectElement.addEventListener('click', function() {
    selectElement.classList.toggle('select-open');
});


// warning

function tampil_peringatan(){
    const warning = document.getElementById('peringatan');
    warning.classList.add("show")
    warning.classList.remove("hidden")
}

function exit_peringatan(){
    const warning = document.getElementById('peringatan');
    warning.classList.add("hidden")
    warning.classList.remove("show")
}

// menambah keranjang

const imageUrls = [
    '/fast_delivery/new_img/mr_1.jpeg',
    '/fast_delivery/new_img/mr_2.jpeg',
    '/fast_delivery/new_img/mr_3.jpeg',
    '/fast_delivery/new_img/mr_4.jpeg',
    '/fast_delivery/new_img/mr_5.jpg',
    '/fast_delivery/new_img/mr_6.jpeg',
    '/fast_delivery/new_img/mr_7.jpeg',
    '/fast_delivery/new_img/mr_8.jpeg',
    '/fast_delivery/new_img/mr_9.jpeg',
    '/fast_delivery/new_img/mr_10.jpeg',
    '/fast_delivery/new_img/Fs_1.jpeg',
    '/fast_delivery/new_img/Fs_2.jpeg',
    '/fast_delivery/new_img/Fs_3.jpeg',
    '/fast_delivery/new_img/Fs_4.jpeg',
    '/fast_delivery/new_img/Fs_5.jpeg',
    '/fast_delivery/new_img/Fs_6.jpeg',
    '/fast_delivery/new_img/Fs_7.jpeg',
    '/fast_delivery/new_img/Fs_8.jpg',
    '/fast_delivery/new_img/Fs_9.jpeg',
    '/fast_delivery/new_img/Fs_10.jpeg',
    'https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/o4AFAb8xnDHJeAN7qfD29WIOfEgQQs6AFpbljJ~tplv-tej9nj120t-origin.webp',
    'https://m.ftscrt.com/food/3f0beb9e-f08b-42a4-8b5a-b395b3dcb978_lg_sq.jpg',
    'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/A9815D06-88FC-4CDC-BC5B-6CB7DC650018/Derivates/157CCDD3-F063-4793-9133-EC8EBEE990CB.jpg',
    'https://media.istockphoto.com/id/913034864/id/foto/hidangan-ikan-salmon-panggang-dan-asparagus.jpg?s=612x612&w=0&k=20&c=CYQTtJVk8ha7lH8cn78dzXqWdUKr5AJcIzbmDtut90k=',
    'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/21938AD2-FC6F-4F9B-B7BE-BE9DB28FC16C/Derivates/80FE994D-74FF-46F2-8B40-8917B55D2157.jpg',
    'https://img-global.cpcdn.com/recipes/2f4513bec5df1b7c/400x400cq70/photo.jpg',
    'https://cdn.yummy.co.id/content-images/images/20220324/O0jkJGmHFlP0Yt1bBi46gHlU1azEKmSP-31363438313130393933d41d8cd98f00b204e9800998ecf8427e.jpg?x-oss-process=image/resize,w_600,h_600,m_fixed,image/format,webp',
    'https://asset.kompas.com/crops/toOljW__-UqEVhGAJe8UyPdZWnU=/92x67:892x600/750x500/data/photo/2023/08/23/64e59deb79bfb.jpg',
    'https://www.acehportal.com/files/images/20220207-jahee.jpg',
    'https://dcostseafood.id/wp-content/uploads/2022/03/Kopi-Tubruk.jpg',
    'https://dcostseafood.id/wp-content/uploads/2021/12/ES-JERUK-murni.jpg',
    'https://img-global.cpcdn.com/recipes/210336ac04190079/680x482cq70/bajigur-foto-resep-utama.jpg',
    'https://www.eec-index.com.tw/upload_file/EEC/066/15616280661.png',
    'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//88/MTA-21632236/ranch-market_kelapa-muda-1kg_full01.jpg',
    'https://www.ruparupa.com/blog/wp-content/uploads/2021/04/Screen-Shot-2021-04-22-at-14.20.53.png',
    'https://img.lazcdn.com/g/ff/kf/S440d90dd87654cf8a03628b2e6f6f6375.jpg_720x720q80.jpg',
    'https://doyanayam.com/wp-content/uploads/2024/01/7b029f06d7eded68f5212c450971540d.jpg'
]



const data_harga = [
    15000,
    12000,
    15000,
    14000,
    20000,
    11000,
    14000,
    10000,
    14000,
    12000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000,
    15000
]

function hitungTotalHarga() {
    let total = 0;
    document.querySelectorAll('.cart5').forEach(cart => {
        let img = cart.querySelector('img');
        let jumlah = cart.querySelector('.image-count');

        if (!img || !jumlah) {
            return;
        }

        let jumlahValue = jumlah.value;
        
        let index = imageUrls.indexOf(img.src.replace(window.location.origin, ''));

        if (index !== -1) {
            total += data_harga[index] * jumlahValue;
        }
    });

    // Tampilkan total harga
    document.querySelector('.total_harga_plc').textContent = total.toLocaleString('id-ID');
}


function updateInputWidth(input) {
    const length = input.value.length;
    input.style.width = `${length + 2}ch`; 
}

let price = 0;

function addImage(imageUrl) {
    const batas_cart = document.querySelector(".batas_cart");
    const divs = document.querySelectorAll('.cart5'); 
    
    let found = false; 

    divs.forEach((div) => {
        const img = div.querySelector('img');
        const countInput = div.querySelector('.image-count');
        if (img) {
            const lnk = img.src;
            const fs = lnk.slice(21, lnk.length);
            console.log(fs)
            // console.log(`fs: ${fs}`, `lnk: ${lnk}`, `imageUrl: ${imageUrl}`);
            
            if (fs === imageUrl) {
                found = true;
                countInput.value = Math.min(parseInt(countInput.value) + 1, 99); 
                updateInputWidth(countInput); 
            } else if(lnk === imageUrl){
                found = true;
                countInput.value = Math.min(parseInt(countInput.value) + 1, 99); 
                updateInputWidth(countInput);
            }
        }
    });

    if (!found) {
        // Jika gambar belum ada di mana pun, cari div kosong
        const emptyDiv = Array.from(divs).find(div => !div.querySelector('img')); 
        if (emptyDiv) {
            const newImg = document.createElement('img');
            newImg.src = imageUrl;
            emptyDiv.appendChild(newImg);

            // Buat div untuk tombol
            const tombolDiv = document.createElement('div');
            tombolDiv.classList.add('tombol');

            // Buat tombol hapus
            const hapusButton = document.createElement('button');
            hapusButton.classList.add('hapus');
            const hapusIcon = document.createElement('i');
            hapusIcon.classList.add('bi', 'bi-x', 'fs-3');
            hapusButton.appendChild(hapusIcon);

            // Tambahkan event listener untuk tombol hapus
            hapusButton.addEventListener('click', () => {
                emptyDiv.innerHTML = ''; // Hapus semua isi dalam div
                for (const div of divs) {
                    const img = div.querySelector('img');
                    if (img) {
                        batas_cart.style.height = "130px";
                        break; // Menghentikan perulangan
                    } else {
                        batas_cart.style.height = "100px";
                    }
                }
                hitungTotalHarga()
            });

            // Tambahkan tombol hapus ke dalam tombolDiv
            tombolDiv.appendChild(hapusButton);

            // Buat input untuk image count yang dapat di-edit
            const countInput = document.createElement('input');
            countInput.type = 'number';
            countInput.classList.add('image-count');
            countInput.value = 1; ;
            countInput.min = 0; ;
            countInput.max = 99; ;
            countInput.maxLength = 2; ;
            emptyDiv.appendChild(countInput);
            emptyDiv.appendChild(tombolDiv);
            batas_cart.style.height = "130px"
            

            // Set lebar input saat pertama kali ditambahkan
            updateInputWidth(countInput);

            // Event listener untuk input perubahan jumlah
            countInput.addEventListener('change', () => {
                hitungTotalHarga()
                if (countInput.value.length > 2) {
                    countInput.value = countInput.value.slice(0, 2); 
                }

                // Validasi nilai input agar tidak melebihi 99
                if (parseInt(countInput.value) > 99) {
                    countInput.value = 99;
                }


                // Jika nilai input 0, hapus gambar
                if (parseInt(countInput.value) === 0) {
                    emptyDiv.innerHTML = ''; 
                    for (const div of divs) {
                        const img = div.querySelector('img');
                        if (img) {
                            batas_cart.style.height = "130px";
                            break; 
                        } else {
                            batas_cart.style.height = "100px";
                        }
                    }
                } 

                updateInputWidth(countInput); 
            });

            // Event listener untuk blur (jika inputan kosong)
            countInput.addEventListener('blur', () => {
                if (countInput.value === '') {
                    emptyDiv.innerHTML = ''; 
                    for (const div of divs) {
                        const img = div.querySelector('img');
                        if (img) {
                            batas_cart.style.height = "130px";
                            break;
                        } else {
                            batas_cart.style.height = "100px";
                        }
                    }
                }
            });
        } else {
            const container = document.querySelector('.batas_cart');
            const newDiv = document.createElement('div');
            newDiv.classList.add('cart5');
            
            const img = document.createElement('img');
            img.src = imageUrl;
            newDiv.appendChild(img);

            const tombolDiv = document.createElement('div');
            tombolDiv.classList.add('tombol');

            // Buat tombol hapus
            const hapusButton = document.createElement('button');
            hapusButton.classList.add('hapus');
            const hapusIcon = document.createElement('i');
            hapusIcon.classList.add('bi', 'bi-x', 'fs-3');
            hapusButton.appendChild(hapusIcon);

            // Tambahkan event listener untuk tombol hapus
            hapusButton.addEventListener('click', () => {
                newDiv.innerHTML = ''; // Hapus semua isi dalam div
                newDiv.remove();
            });

            // Tambahkan tombol hapus ke dalam tombolDiv
            tombolDiv.appendChild(hapusButton);

            // Buat input untuk image count yang dapat di-edit
            const countInput = document.createElement('input');
            countInput.type = 'number';
            countInput.classList.add('image-count');
            countInput.value = 1;
            countInput.min = 0;
            countInput.max = 99; 
            countInput.maxLength = 2; 
            newDiv.appendChild(countInput);
            newDiv.appendChild(tombolDiv);

            // Set lebar input saat pertama kali ditambahkan
            updateInputWidth(countInput);

            countInput.addEventListener('input', () => {
                // Batasi jumlah digit ke 2
                if (countInput.value.length > 2) {
                    countInput.value = countInput.value.slice(0, 2); 
                }

                // Validasi nilai input agar tidak melebihi 99
                if (parseInt(countInput.value) > 99) {
                    countInput.value = 99;
                }

                // Jika nilai input 0, hapus gambar
                if (parseInt(countInput.value) === 0) {
                    newDiv.innerHTML = ''; 
                }

                updateInputWidth(countInput); 
            });

            // Event jika inputan kosong
            countInput.addEventListener('blur', () => {
                if (countInput.value === '') {
                    newDiv.innerHTML = ''; 
                    newDiv.remove();
                }
            });

            container.appendChild(newDiv);
        }
    } 
}



// Menambahkan event listener pada seluruh tombol dengan class 'cart'
document.querySelectorAll('.cart').forEach((button) => {
    button.addEventListener('click', (event) => {
        const index = event.target.closest('button').getAttribute('data-index');
        addImage(imageUrls[index]);
        hitungTotalHarga() 
    });
});

// reset keranjang 

const rest = document.getElementById('reset_cart');

rest.addEventListener("click", ()=>{
    const divs = document.querySelectorAll('.cart5');
    const batas_cart = document.querySelector(".batas_cart");
    document.querySelector('.total_harga_plc').textContent = '';
    for (const div of divs) {
        div.innerHTML = '';
    }

    for (const div of divs) {
        const img = div.querySelector('img');
        if (img) {
            batas_cart.style.height = "130px";
            break; 
        } else {
            batas_cart.style.height = "100px";
        }
    }
})

// prasmanan

const data_pras = [
    '/fast_delivery/new_img/lap_1.jpeg',
    '/fast_delivery/new_img/lap_2.jpeg',
    '/fast_delivery/new_img/lap_3.jpeg',
    '/fast_delivery/new_img/lap_4.jpeg',
    '/fast_delivery/new_img/sam_1.jpeg',
    '/fast_delivery/new_img/sam_2.jpeg',
    '/fast_delivery/new_img/sam_3.jpeg',
    '/fast_delivery/new_img/sam_4.jpeg',
    '/fast_delivery/new_img/nasi_1.jpeg',
    '/fast_delivery/new_img/nasi_2.jpeg',
    '/fast_delivery/new_img/nasi_3.jpeg',
    '/fast_delivery/new_img/nasi_4.jpeg',
    '/fast_delivery/new_img/nasi_5.jpeg',
    '/fast_delivery/new_img/nasi_6.jpeg',
    '/fast_delivery/new_img/lauk_1.jpeg',
    '/fast_delivery/new_img/lauk_2.jpeg',
    '/fast_delivery/new_img/lauk_3.jpeg',
    '/fast_delivery/new_img/lauk_4.jpeg',
    '/fast_delivery/new_img/lauk_5.jpeg',
    '/fast_delivery/new_img/say_1.jpeg',
    '/fast_delivery/new_img/say_2.jpeg',
    '/fast_delivery/new_img/say_3.jpeg',
    '/fast_delivery/new_img/say_4.jpeg',
    '/fast_delivery/new_img/ker_1.jpeg',
    '/fast_delivery/new_img/ker_2.jpeg',
    '/fast_delivery/new_img/ker_3.jpeg',
    '/fast_delivery/new_img/ker_4.jpeg'
]

console.log(data_pras.length)

function addPras(Url_Pras){
    const lauk = document.getElementsByClassName('lauk');
    const emptyDiv = Array.from(lauk).find(div => !div.querySelector('img')); 
    if(emptyDiv){
        const hapusButton = document.createElement('button');
        hapusButton.classList.add('del_pras');
        const hapusIcon = document.createElement('i');
        hapusIcon.classList.add('bi', 'bi-x', 'fs-3');
        hapusButton.appendChild(hapusIcon);

        const img = document.createElement('img');
        img.src = Url_Pras;

        emptyDiv.appendChild(hapusButton);
        emptyDiv.appendChild(img);

        hapusButton.addEventListener('click', () => {
            emptyDiv.innerHTML = ''; 
        });
    }
}

document.querySelectorAll('.tambah_pras').forEach((button) => {
    button.addEventListener('click', (event) => {
        const index = event.target.closest('button').getAttribute('data-index');
        addPras(data_pras[index]); 
    });
});

function deletePras(){
    const lauk = document.getElementsByClassName('lauk');
    for (const val of lauk){
        val.innerHTML = '';
    }
}

const prasmanan_img = [
    '/fast_delivery/new_img/plate.jpeg'
]

document.querySelectorAll('.cart_pras').forEach((button) => {
    button.addEventListener('click', (event) => {
        const index = event.target.closest('button').getAttribute('data-index');
        const lauk = document.getElementsByClassName('lauk');
        let flag = false;

        for (const val of lauk){
            console.log(val.querySelector('img'))
            if (val.querySelector('img')){
                console.log("oioi")
                deletePras();
                addImage(prasmanan_img[index]); 
                flag = true;
                break;
            } 
        }

        if (!flag){
            const warning = document.getElementById('peringatan_cart_pras');
            warning.classList.add("show")
            warning.classList.remove("hidden")
        }
        
    });
});

const oke_peringatan_cart_pras = document.getElementById('oke_peringatan_cart_pras') 
oke_peringatan_cart_pras.addEventListener("click", () => {
    const warning = document.getElementById('peringatan_cart_pras');
    warning.classList.add("hidden")
    warning.classList.remove("show")
})

// click prasmanan 

const tombol_pras = document.getElementById('Prasmanan_btn');
const tombol_pras2 = document.getElementById('addprasmananMenu');
const prasmanan_page = document.querySelector('.prasmanan-container')

const closeButton = document.querySelector('.close_pras');

tombol_pras.addEventListener('click', ()=>{
    prasmanan_page.style.display = 'flex';
    document.body.classList.add('no-scroll');
    prasmanan_page.classList.remove('exit');
});

tombol_pras2.addEventListener('click', ()=>{
    prasmanan_page.style.display = 'flex';
    document.body.classList.add('no-scroll');
    prasmanan_page.classList.remove('exit');
})

closeButton.addEventListener('click', function() { 
    const prasmanan_page = document.querySelector('.prasmanan-container');

    prasmanan_page.classList.add('exit');

    setTimeout(function() {
        prasmanan_page.style.display = 'none'; 
        document.body.classList.remove('no-scroll');
    }, 500); 
});


// pop up beli sekarang

document.querySelectorAll('.buy_now').forEach((button) => {
    button.addEventListener('click', (event) => {

        const popup = document.getElementById('beli1');
        const beli_sekarang = document.getElementById('beli_sekarang')
        popup.classList.remove('hidden');
        beli_sekarang.classList.remove('hidden')
        beli_sekarang.classList.add('show')
        popup.classList.add('show') 
    });
});
  
const close_beli = document.querySelector('.close_beliSekarang');

close_beli.addEventListener('click', function() {

    const popup = document.getElementById('beli1');
    const beli_sekarang = document.getElementById('beli_sekarang')
    popup.classList.remove('show');
    beli_sekarang.classList.remove('show');
    beli_sekarang.classList.add('hidden');
    popup.classList.add('hidden')
});
  
const tidak_setuju = document.querySelector('.tidak_yakin');

tidak_setuju.addEventListener('click', function() {
    const popup = document.getElementById('beli1');
    popup.classList.remove('show');
    popup.classList.add('hidden')
});

const setuju = document.querySelector('.yakin1')

setuju.addEventListener('click', function() {
    const popup = document.getElementById('proses_pop');
    const beli_sekarang = document.getElementById('beli_sekarang')
    popup.classList.remove('hidden');
    beli_sekarang.classList.remove('show');
    beli_sekarang.classList.add('hidden');
    popup.classList.add('show')  
});

window.addEventListener('click', function(event) {
    const popup = document.getElementById('beli1');
    const beli_sekarang = document.getElementById('beli_sekarang')
    const popup1 = document.getElementById('proses_pop');
    if (event.target == popup) {
      popup.classList.remove('show');
      beli_sekarang.classList.remove('show');
      popup1.classList.remove('show');
      popup.classList.add('hidden')
      beli_sekarang.classList.add('hidden')
      popup1.classList.add('hidden')
    }
});

const oke = document.querySelector('.proses_pop_ok')
oke.addEventListener('click', ()=>{
    const popup = document.getElementById('beli1');
    const popup1 = document.getElementById('proses_pop');
    popup.classList.remove('show');
    popup1.classList.remove('show');
    popup.classList.add('hidden')
    popup1.classList.add('hidden')
});


// resuest user 

const request_user_keranjang = document.querySelector('#request_user_keranjang');

request_user_keranjang.addEventListener("click", ()=>{
    const request1 = document.getElementById('request1');

    request1.classList.remove('hidden');
    request1.classList.add('show');
})


const close_request = document.querySelector('.request_close2')

close_request.addEventListener("click", ()=>{
    const request1 = document.getElementById('request1');

    request1.classList.remove('show');
    request1.classList.add('hidden');
})

const oke_request = document.querySelector('.oke_request2');

oke_request.addEventListener('click', ()=>{
    const request1 = document.getElementById('request1');

    request1.classList.remove('show');
    request1.classList.add('hidden');
})

// checkout page 

const checkout = document.getElementById('checkout');

checkout.addEventListener("click", ()=>{
    const checkoutPage = document.getElementById('checkout_page');
    const yakin_co = document.getElementById('yakin_checkout');
    const batas_cart = document.querySelector(".batas_cart");
    const divs = document.querySelectorAll('.cart5');
    let flag = false;
    for (const div of divs){
        if (div.querySelector('img')){
            document.querySelector('.total_harga_plc').textContent = '';
            for (const div of divs) {
                div.innerHTML = '';
            }
        
            yakin_co.classList.remove('hidden');
            yakin_co.classList.add('show');
            checkoutPage.classList.remove('hidden');
            checkoutPage.classList.add('show');
            batas_cart.style.height = "100px";
            
            flag = true;
        } 
    }

    if (!flag){
        tampil_peringatan()
        const oke_peringatan = document.getElementById('oke_peringatan')
        oke_peringatan.addEventListener("click", ()=>{
            exit_peringatan()
        })
    }
})

const yakin_checkout = document.querySelector('.yakin_co1')

yakin_checkout.addEventListener('click', function() {
    const yakin_co = document.getElementById('yakin_checkout');
    const proses_co = document.getElementById('checkout_page2');

    yakin_co.classList.remove('show');
    yakin_co.classList.add('hidden');
    proses_co.classList.add('show');
    proses_co.classList.remove('hidden')  
});


const tidak_yakin_co = document.querySelector('.tidak_yakin_co') 

tidak_yakin_co.addEventListener("click", ()=>{
    const checkoutPage = document.getElementById('checkout_page');
    const yakin_co = document.getElementById('yakin_checkout');

    yakin_co.classList.remove('show');
    yakin_co.classList.add('hidden');
    checkoutPage.classList.remove('show');
    checkoutPage.classList.add('hidden');
})

const oke_co = document.getElementById('oke_co')

oke_co.addEventListener("click", ()=>{
    const checkoutPage = document.getElementById('checkout_page');
    const proses_co = document.getElementById('checkout_page2');

    checkoutPage.classList.remove('show');
    checkoutPage.classList.add('hidden');
    proses_co.classList.add('hidden');
    proses_co.classList.remove('show') 

    const request_textarea = document.querySelector('.request_textarea');

    request_textarea.value = '';
})


const buy_now_pras = document.querySelector('.buy_now_pras');


buy_now_pras.addEventListener('click', function() {
    const lauk = document.querySelectorAll('.lauk');
    let flag = false;

    for (const val of lauk){
        console.log(val.querySelector('img'))
        if (val.querySelector('img')){
            console.log("PPP")
            const popup = document.getElementById('beli1');
            const beli_sekarang = document.getElementById('beli_sekarang')
            popup.classList.remove('hidden');
            beli_sekarang.classList.remove('hidden');
            beli_sekarang.classList.add('show');
            popup.classList.add('show')
            flag = true;
            deletePras();
            break;
        } 
    }

    if (!flag){
        const warning = document.getElementById('peringatan_pras');
        warning.classList.add("show")
        warning.classList.remove("hidden")
    }       
})

const oke_peringatan_pras = document.getElementById('oke_peringatan_pras') 
oke_peringatan_pras.addEventListener("click", () => {
    const warning = document.getElementById('peringatan_pras');
    warning.classList.add("hidden")
    warning.classList.remove("show")
})