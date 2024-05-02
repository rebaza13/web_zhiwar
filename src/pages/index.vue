<template>
<div class="">
<RouterView/>
    <v-card>
    <v-layout >
 
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list >
          <v-list-item  class="cursor-pointer" @click="handlepath('profile')"
            prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIa3zYwAhY6t97Jav3ta51__d8jtrRUNqPHxlXIjCfvQ&s"
            subtitle="zhiwar"
            title=" admin"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item  @click="handlepath('users')" prepend-icon="mdi-account-multiple" title="users" value="users"></v-list-item>
          <v-list-item @click="handlepath('products')" prepend-icon="mdi-star" title="Products" value="Products"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    
    </v-layout>
  </v-card>
</div>
</template>
<script setup lang="ts">
import Table from './table/Table.vue';
import { RouterView, useRouter } from 'vue-router';
const router = useRouter()
const handlepath = (path:string)=>{
  router.push(`/${path}`)
}
</script>
