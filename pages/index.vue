<template>
  <div>
    <Sidebar handler="Beranda" />
    <div class="sm:w-full md:w-75 sm:h-full md:h-screen flex flex-col md:ml-300 justify-center items-center p-16">
      <h1 class="text-4xl font-bold self-start">
        Data Penghasilan
      </h1>
      <div class="w-full income-wrapper flex sm:flex-col md:flex-row mt-8">
        <DataCards title="Total Penghasilan Keseluruhan" :nominal="getAllIncome" />
        <DataCards title="Total Penghasilan Bulan ini" :nominal="getMonthIncome" class="md:ml-16 sm:mt-8" />
      </div>

      <hr class="border-2 border-white w-full mt-16">

      <h1 class="text-4xl font-bold self-start mt-16">
        Data Pelanggan
      </h1>
      <div class="w-full customer-wrapper flex sm:flex-col md:flex-row mt-8">
        <DataCards title="Total Pelanggan Keseluruhan" :nominal="getAllCustomers" />
        <DataCards title="Total Pelanggan Bulan ini" :nominal="getMonthlyCustomers" class="md:ml-16 sm:mt-8" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    getAllIncome: 'data/getIncome',
    getMonthIncome: 'data/getIncomeByMonth',
    getAllCustomers: 'data/getTotalCustomer',
    getMonthlyCustomers: 'data/getMonthlyCustomer'
  })
}
</script>
