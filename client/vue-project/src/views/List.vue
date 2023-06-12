<template>
  <div class="row">
    <div class="row row-cards">
      <div class="space-y">
        <div v-for="product in products" class="card">
          <div class="row g-0">
            <div class="col-auto">
              <div class="card-body">
                <div class="avatar avatar-md" style="background-image: url(../images/crypto.jpg)"></div>
              </div>
            </div>
            <div class="col">
              <div class="card-body ps-0">
                <div class="row">
                  <div class="col">
                    <h3 class="mb-0"><RouterLink :to="'detail/'+product._id">{{ product.name }}</RouterLink></h3>
                  </div>
                  <div class="col-auto fs-3 text-green">$ {{ product.price }}</div>
                </div>
                <div class="row">
                  <div class="col-md">
                    <div class="mt-3 list-inline list-inline-dots mb-0 text-muted d-sm-block d-none">
                      <div class="list-inline-item"><!-- Download SVG icon from http://tabler-icons.io/i/building-community -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"></path><path d="M13 7l0 .01"></path><path d="M17 7l0 .01"></path><path d="M17 11l0 .01"></path><path d="M17 15l0 .01"></path></svg>
                        Center Pixel, Inc</div>
                      <div class="list-inline-item"><!-- Download SVG icon from http://tabler-icons.io/i/license -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path><path d="M9 7l4 0"></path><path d="M9 11l4 0"></path></svg>
                        Full-time or Contract</div>
                      <div class="list-inline-item"><!-- Download SVG icon from http://tabler-icons.io/i/map-pin -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path></svg>
                        Remote / Palo Alto, CA</div>
                    </div>
                    <div class="mt-3 list mb-0 text-muted d-block d-sm-none">
                      <div class="list-item"><!-- Download SVG icon from http://tabler-icons.io/i/building-community -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"></path><path d="M13 7l0 .01"></path><path d="M17 7l0 .01"></path><path d="M17 11l0 .01"></path><path d="M17 15l0 .01"></path></svg>
                        Center Pixel, Inc</div>
                      <div class="list-item"><!-- Download SVG icon from http://tabler-icons.io/i/license -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path><path d="M9 7l4 0"></path><path d="M9 11l4 0"></path></svg>
                        Full-time or Contract</div>
                      <div class="list-item"><!-- Download SVG icon from http://tabler-icons.io/i/map-pin -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path></svg>
                        Remote / Palo Alto, CA</div>
                    </div>
                  </div>
                  <div class="col-md-auto">
                    <div class="mt-3 badges">
                      <a v-for="tag in product.tags" href="#" class="badge badge-outline text-muted border fw-normal badge-pill">{{ tag }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';

  let products = ref([]);

  onMounted(async() => {
    var result = await axios.get('http://localhost:3000/products');
    products.value = result.data;
  });

</script>
