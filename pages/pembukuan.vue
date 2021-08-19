<template>
  <div>
    <Sidebar handler="Pembukuan" />
    <div class="sm:w-full md:w-75 sm:h-full md:h-screen flex flex-col md:ml-300 justify-center items-center sm:p-8 p-16">
      <h1 class="text-4xl font-bold self-start">
        Tambah Data Pembukuan
      </h1>

      <div class="w-full add-wrapper flex flex-col mt-8">
        <form @submit.prevent="addCustomer">
          <div class="field-wrapper w-full flex sm:flex-col flex-row">
            <input v-model="cust.name" name="name" class="w-full p-4 focus:outline-none rounded-lg text-black" type="text" placeholder="Nama Pelanggan">
            <input class="w-full p-4 sm:mt-8 md:ml-8 focus:outline-none rounded-lg text-black" type="text" :value="currentDate" :placeholder="currentDate" readonly>
            <div class="flex w-full sm:mt-8">
              <input v-model="cust.weight" name="weight" class="flex-1 p-4 md:ml-8 focus:outline-none rounded-tl-lg rounded-bl-lg text-black" type="number" placeholder="Berat">
              <div class="p-4 addon items-center flex justify-center rounded-tr-lg rounded-br-lg bg-lightgray text-black">
                kg
              </div>
            </div>
          </div>
          <div class="field-wrapper w-full flex sm:flex-col flex-row mt-8">
            <input v-model="cust.price" name="price" class="w-full p-4 focus:outline-none rounded-lg text-black" type="number" placeholder="Harga">
            <input v-model="cust.additional" name="additional" class="w-full p-4 sm:mt-8 md:ml-8 focus:outline-none rounded-lg text-black" type="text" placeholder="Informasi tambahan">
          </div>
          <button type="submit" class="w-full bg-green-400 mt-8 py-4 rounded-lg">
            Simpan
          </button>
        </form>
      </div>

      <hr class="border-2 border-white w-full mt-16">

      <div class="w-full overflow-auto mt-8">
        <table class="border w-full border-lightblue border-collapse text-center rounded-xl p-4">
          <thead>
            <tr class="border border-lightblue">
              <th class="p-2">
                Nama Pelanggan
              </th>
              <th class="p-2">
                Tanggal Masuk (Bulan/Tanggal/Tahun)
              </th>
              <th class="p-2">
                Berat
              </th>
              <th class="p-2">
                Harga
              </th>
              <th class="p-2">
                Informasi Tambahan
              </th>
              <th class="p-2">
                Sudah diambil?
              </th>
              <th class="p-2">
                Hapus data?
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in customers" :key="customer.id" class="border border-lightblue">
              <td class="p-2">
                {{ customer.name }}
              </td>
              <td class="p-2">
                {{ customer.date_in }}
              </td>
              <td class="p-2">
                {{ customer.weight }} Kg
              </td>
              <td class="p-2">
                Rp {{ customer.price }}
              </td>
              <td class="p-2">
                {{ customer.additional }}
              </td>
              <td class="text-center p-2">
                <input :checked="customer.taken" type="checkbox" name="finished" @change="toggle(customer)">
                {{ customer.taken }}
              </td>
              <td class="text-center p-2">
                <a id="delete" type="submit" class="text-red-400 cursor-pointer hover:underline" @click="deleteItem(customer.id)">
                  Hapus
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  data () {
    return {
      currentDate: moment().format('D/M/YYYY'),
      cust: {
        name: '',
        date_in: moment().format('D/M/YYYY'),
        weight: 0,
        price: 0,
        additional: '',
        taken: false
      }
    }
  },
  computed: mapGetters({
    customers: 'data/get'
  }),
  methods: {
    addCustomer () {
      if (this.cust.name === '' || this.cust.addtional === '' || this.cust.weight === '' || this.cust.price === '') {
        alert('Mohon masukkan data dengan lengkap')
        return null
      }

      const obj = {
        id: Math.floor(Math.random() * 100000),
        ...this.cust
      }

      this.$store.commit('data/add', obj)
      this.cust.name = ''
      this.cust.weight = ''
      this.cust.price = ''
      this.cust.additional = ''
    },
    deleteItem (id) {
      if (confirm('Apakah anda benar benar ingin menghapus data ini?')) {
        this.$store.commit('data/delete', id)
      }
    },
    ...mapMutations({
      toggle: 'data/toggle'
      // delete: 'data/delete'
    })
  }
}
</script>
