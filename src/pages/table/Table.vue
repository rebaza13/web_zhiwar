<template>
    <v-card class="ml-14 w-full"
      title="Users"
      flat
    >
      <template v-slot:text>
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
        ></v-text-field>
      </template>
  
      <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
      ></v-data-table>
    </v-card>
  </template>
<script>
export default {
  data() {
    return {
      search: '',
      headers: [
  {
    align: 'start',
    key: 'name',
    sortable: false,
    title: 'Name (100g serving)',
  },
  { key: 'tall', title: 'Height' },
  { key: 'weigh', title: 'Weight' },
  { key: 'carbs', title: 'Carbs (g)' },
  { key: 'protein', title: 'Protein (g)' },
  { key: 'iron', title: 'Iron (%)' },
],

      users: [
        {
          name: 'Mehmet',
          tall: 175,
          weigh: 70,
          carbs: 300,
          protein: 60,
          iron: 10,
        },
        {
          name: 'Dilşad',
          tall: 160,
          weigh: 55,
          carbs: 250,
          protein: 50,
          iron: 15,
        },
        {
          name: 'Berxwedan',
          tall: 185,
          weigh: 80,
          carbs: 350,
          protein: 70,
          iron: 12,
        },
        {
          name: 'Aysel',
          tall: 170,
          weigh: 65,
          carbs: 280,
          protein: 55,
          iron: 18,
        },
        {
          name: 'Rojda',
          tall: 155,
          weigh: 50,
          carbs: 230,
          protein: 45,
          iron: 20,
        },
      ],
    };
  },
};
</script>
