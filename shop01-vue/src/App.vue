<template>
 <div id="app">
    <header>
      <div class="logo">Reload Nexus</div>
      <nav>
        <ul>
          <li><a href="#">หน้าแรก</a></li>
          <li><a href="#">วิธีสั่งซื้อสินค้า</a></li>
          <li><a href="#">โปรโมชั่น</a></li>
          <li><a href="#">แจ้งชำระเงิน</a></li>
          <li><a href="#">เข้าสู่ระบบ</a></li>
        </ul>
      </nav>
    </header>
    
    <main>
      <div class="announcement">
        <p>ขณะนี้ เว็บไซต์ได้ปิดให้บริการปกติ</p>
      </div>
      
      <section class="icons">
        <div class="icon"><i class="fas fa-user"></i><p>ผู้ใช้งานใหม่</p></div>
        <div class="icon"><i class="fas fa-shopping-cart"></i><p>รายการที่ซื้อบ่อย</p></div>
        <div class="icon"><i class="fas fa-ticket-alt"></i><p>รายการที่ลดบ่อย</p></div>
        <div class="icon"><i class="fas fa-check"></i><p>รายการที่ยืนยันแล้ว</p></div>
      </section>
      
      <section class="products">
        <h2>สินค้ายอดนิยม</h2>
        <div class="product-list">
          <ProductCard name="Genshin" />
          <ProductCard name="Honkai" />
          <ProductCard name="WuWa" />
        </div>
      </section>
      
      <section class="popular-list">
        <h2>รายการเติมยอดนิยม</h2>
        <div class="list">
          <ListItem name="Genshin" />
          <ListItem name="Honkai" />
          <ListItem name="Valorant" />
        </div>
      </section>
      
      <section class="popular-stream">
        <h2>รายการสตรีมมิ่งยอดนิยม</h2>
        <div class="list">
          <ListItem name="Netflix" />
          <ListItem name="Youtube" />
          <ListItem name="Viu" />
        </div>
      </section>
      
      <section class="reviews">
        <h2>รีวิวจากผู้ใช้งาน</h2>
        <div class="reviews-list">
          <ReviewCard username="คงเดช" product="Netflix 30 Day" review="สินค้าและบริการดีค่ะ จะกลับมาซื้ออีกแน่นอนค่ะ" />
          <ReviewCard username="Zanan" product="ID Genshin Impact 150 ..." review="สุดๆๆๆๆ" />
          <ReviewCard username="BRO123" product="VALORANT 90points" review="ดีค่ะ ได้โค้ดทันใจ บริการดี" />
        </div>
      </section>
      
      <section class="contact-info">
        <h2>เกี่ยวกับเรา</h2>
        <p>Reload Nexus เว็บไซต์จำหน่ายสินค้าของใหม่...</p>
        <h2>ช่องทางติดต่อ</h2>
        <p>Facebook page: Reload Nexus</p>
        <p>Line: reload.nexus1</p>
        <p>Email: ReloadNexus@gmail.com</p>
        <p>เวลาเปิดทำการ 10:00 น. - 23:00 น.</p>
      </section>
    </main>
    
    <footer>
      <div class="facebook-page">Facebook page</div>
    </footer>
  </div>


</template>

<script>
import ProductCard from 'components/ProductCard.vue';
import ListItem from 'components/ListItem.vue';
import ReviewCard from 'components/ReviewCard.vue';

export default {
  name: 'App',
  components: {
    ProductCard,
    ListItem,
    ReviewCard
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
