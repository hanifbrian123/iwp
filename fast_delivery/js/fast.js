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
    'https://i.pinimg.com/736x/4d/89/4a/4d894ae7d925293f90b3aa7e5b3a316c.jpg',
    'https://i.pinimg.com/564x/7c/e6/2c/7ce62cc4cef9d1fc86cdefce494887b4.jpg',
    'https://i.pinimg.com/564x/da/8d/96/da8d96e31f94de350849adbee8591668.jpg',
    'https://i.pinimg.com/564x/f4/0a/c5/f40ac59e798b1cabcb51fb4fcdf778e1.jpg',
    'https://i.pinimg.com/564x/68/d5/04/68d50415e6611e6dc423835b0c10bb0a.jpg',
    'https://i.pinimg.com/564x/da/01/ca/da01cad4bb91e1366bfaef024aa832b5.jpg',
    'https://i.pinimg.com/564x/7c/d0/8b/7cd08bee35ca571f142e92d2b0bbcb9e.jpg',
    'https://i.pinimg.com/564x/fb/e4/53/fbe453f894a67293c38fa1acb6befc6d.jpg',
    'https://i.pinimg.com/564x/8a/1d/6a/8a1d6aab8005a86a6ba78936225145ed.jpg',
    'https://i.pinimg.com/564x/17/f0/cd/17f0cdf56098811328beffaa800f4ba0.jpg',
    'https://i.pinimg.com/736x/2d/9e/4c/2d9e4cf5605a54b1e19dff3f07bc21f6.jpg	',
    'https://i.pinimg.com/564x/69/55/ba/6955baf2b88adc525007933d6c7a355a.jpg',
    'https://i.pinimg.com/736x/65/1e/47/651e47c65c0b9088fdc62aa7a83c01b2.jpg',
    'https://i.pinimg.com/564x/a7/5f/14/a75f14b2364b7c56aa318c7437513050.jpg',
    'https://i.pinimg.com/736x/5a/fc/6b/5afc6bff21cac5563d312960d6f5b9d5.jpg',
    'https://i.pinimg.com/736x/94/3a/25/943a25701803947e8853083430d01c39.jpg',
    'https://i.pinimg.com/564x/df/b6/9e/dfb69e95e18c542da2c35803e3ba0a59.jpg',
    'https://asset.kompas.com/crops/o0dGFr1gthyBRTfg9-2Jxy-oTOY=/0x0:1000x667/750x500/data/photo/2020/06/20/5eecf73cbbd07.jpg',
    'https://i.pinimg.com/564x/f7/4c/03/f74c031fe3dd6f1675b11b249ce24770.jpg',
    'https://i.pinimg.com/564x/cc/c7/de/ccc7de8592839f1fce8e06c8c9633059.jpg',
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
    'https://i.pinimg.com/736x/cb/0e/31/cb0e311d40087fb97f491eb1e7608fe4.jpg',
    'https://i.pinimg.com/564x/8f/c8/78/8fc8782ce11aaf088065593ad1c47f75.jpg',
    'https://i.pinimg.com/564x/32/6a/eb/326aeb80cc0c0de8194fa20fead03021.jpg',
    'https://i.pinimg.com/564x/51/44/8f/51448fa612b19d4b3fa7eab6c0a95947.jpg',
    'https://i.pinimg.com/564x/be/a8/96/bea8968d865f78d5014291bed920beb3.jpg',
    'https://i.pinimg.com/564x/b8/7b/6a/b87b6aba66bb7944df9c00900fcae159.jpg',
    'https://i.pinimg.com/564x/62/e6/1c/62e61c0ab57d593de26f0460fca2b6e3.jpg',
    'https://i.pinimg.com/564x/a0/1e/6c/a01e6c97767ec92b9cb813ea3c445acd.jpg',
    'https://i.pinimg.com/564x/a7/22/dd/a722ddb01ff6be7f8c260c1137e6eb4b.jpg',
    'https://i.pinimg.com/564x/03/4b/df/034bdf1c79a0515027bbb3a63a358d2a.jpg',
    'https://i.pinimg.com/564x/7b/c8/66/7bc866c6dadf180233c1afce1bcb960a.jpg',
    'https://i.pinimg.com/736x/48/11/d6/4811d68b8778315e8be032d1a7438515.jpg',
    'https://i.pinimg.com/564x/f6/08/fd/f608fd04795d71a0f6a2a1079daff5fc.jpg',
    'https://i.pinimg.com/564x/03/eb/e9/03ebe9637c2bfd1f135515b4457c5a01.jpg',
    'https://i.pinimg.com/564x/6d/c2/8d/6dc28dc180a0e67d98d7ca4711aee42f.jpg',
    'https://i.pinimg.com/736x/33/77/f1/3377f1c3ec7f05515d1036a8a8311cd0.jpg',
    'https://i.pinimg.com/564x/a9/63/13/a9631364901c275804d244c5066c3f7d.jpg',
    'https://i.pinimg.com/564x/d4/f9/53/d4f953c3827a2ca1183b499a17dfdd0a.jpg',
    'https://i.pinimg.com/564x/fc/f6/63/fcf66327da710f2d7b10f4fb8d7d351c.jpg',
    'https://i.pinimg.com/564x/28/2e/25/282e25e6940328f9097c89ffa3a0e642.jpg',
    'https://i.pinimg.com/564x/e2/33/70/e23370da5d06c784c091e8c3a56c9171.jpg',
    'https://i.pinimg.com/564x/53/06/5e/53065e320d7910ab855de52bec93a601.jpg',
    'https://i.pinimg.com/564x/2b/a4/50/2ba450e204df733ffbd9f28896c9a725.jpg',
    'https://i.pinimg.com/736x/07/23/54/072354b576ef244fbe06d83470bdf0ed.jpg',
    'https://i.pinimg.com/564x/07/8d/5c/078d5c3eb61edbb0e9c5f8612951dfad.jpg',
    'https://i.pinimg.com/736x/dc/fe/63/dcfe634270f5b69c33b41f392eef2b54.jpg',
    'https://i.pinimg.com/564x/d1/31/bd/d131bd751a3d9e8c6c460f1e74e991c5.jpg'
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
    'https://i.pinimg.com/564x/28/3f/10/283f10c6280d042bcde718716dc7e07a.jpg'
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
