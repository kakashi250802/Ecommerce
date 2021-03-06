document.querySelectorAll('.product-img-item').forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src');
        document.querySelector('#product-img > img').setAttribute('src', img);
    });
});
document.querySelector('#view-all-desc').addEventListener('click', () => {
    let content = document.querySelector('.product-detail-desc-content');
    content.classList.toggle('active');
    document.querySelector('#view-all-desc').innerHTML = content.classList.contains('active') ? 'view less' : 'view all';
});
let products = [{
        name: 'JBL Quantum 400',
        image1: './assets/images/JBL_Quantum_400_Product Image_Hero 02.png',
        image2: './assets/images/JBL_Quantum_400_Product Image_Hero Mic Up.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL E55BT KEY BLACK',
        image1: './assets/images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png',
        image2: './assets/images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL JR 310BT',
        image1: './assets/images/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
        image2: './assets/images/JBL_JR 310BT_Product Image_Detail_Skyblue.png',
        old_price: '400',
        curr_price: '300'
    },

]
let product_list = document.querySelector('#related-products');
renderProducts = (products) => {
    products.forEach((e) => {
        let prod = `
    <div class="col-4 col-md-6 col-sm-12">
    <div class="product-card">
        <div class="product-card-img">
            <img src="${e.image1}" alt="">
            <img src="${e.image2}" alt="">
        </div>
        <div class="product-card-info">
            <div class="product-btn">
                <a href="./product-detail.html" class="btn-flat btn-hover btn-show-now">shop now</a>
                <button class="btn-flat btn-hover btn-card-add">
                    <i class='bx bxs-cart-add'></i>
                </button>
                <button class="btn-flat btn-hover btn-card-add">
                    <i class='bx bxs-heart'></i>
                </button>
            </div>
            <div class="product-card-name">
                ${e.name}
            </div>
            <div class="product-card-price">
                <span><del>${e.old_price}</del></span>
                <span class="curr-price">${e.curr_price}</span>
            </div>
        </div>
    </div>
</div>
    `;
        product_list.insertAdjacentHTML("beforeend", prod);
    })

};
renderProducts(products);