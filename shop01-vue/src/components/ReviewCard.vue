<template>
    <div class="review-card">
      <p><strong>{{ username }}</strong></p>
      <p>สินค้า: {{ product }}</p>
      <p>รีวิว: {{ review }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['username', 'product', 'review']
  };
  </script>
  
  <style scoped>
  /* เพิ่ม CSS สไตล์ของคุณที่นี่ */
  </style>
  