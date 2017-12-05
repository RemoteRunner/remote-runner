<template>
<div class="container">
  <div class="row">
    <div class="col-12">

      <vuetable-pagination-info ref="paginationInfoTop"></vuetable-pagination-info>
      <vuetable-pagination ref="paginationTop" @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>

      <vuetable ref="vuetable"
        :fields="fields"
        pagination-path=""
        :per-page="10"
        :multi-sort="true"
        :sort-order="sortOrder"
        @vuetable:pagination-data="onPaginationData">
      </vuetable>

      <vuetable-pagination-info ref="paginationInfo"></vuetable-pagination-info>
      <vuetable-pagination ref="pagination" @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>

    </div>
  </div>
</div>
</template>


<script>
import Vue from "vue";
import accounting from 'accounting';
import moment from 'moment';
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo";
import apiService from '../service/api.service.js';

let myJournal = {
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo
  },
  data () {
    return {
      fields: [
        {
          name: 'record_id',
          sortField: 'record_id',
        }, 
        {
          name: 'date',
          sortField: 'date'
        },
        {
          name: 'status',
          sortField: 'status',
        },
        {
          name: 'command',
          sortField: 'command'
        },
        {
          name: 'params',
          sortField: 'params'
        },
      ],
      sortOrder: [
        {
          field: 'record_id',
          sortField: 'record_id',
          direction: 'asc'
        }
      ]
    }
  },
  created: function () {
      apiService.getUserJournal(this.$user.id)
          .then((data) => {
              console.log(this);
              this.tableData(data);
          })
          .catch((err) => {
              this.setData([])
          })
  },
  methods: {
  getData () {
      tapiService.getUserJournal(this.$user.id)
          .then((data) => {
              this.tableData(data);
          })
          .catch((err) => {
              this.setData([])
          })
  },
    allcap (value) {
      return value.toUpperCase()
    },
    genderLabel (value) {
      return value === 'M'
        ? '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
        : '<span class="ui pink label"><i class="large woman icon"></i>Female</span>'
    },
    formatNumber (value) {
      return accounting.formatNumber(value, 2)
    },
    formatDate (value, fmt = 'D MMM YYYY') {
      return (value == null)
        ? ''
        : moment(value, 'YYYY-MM-DD').format(fmt)
    },
    onPaginationData (paginationData) {
      this.$refs.paginationTop.setPaginationData(paginationData)
      this.$refs.paginationInfoTop.setPaginationData(paginationData)
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    }
  }
};

Vue.component("journal", myJournal);
export default myJournal;
</script>

<style media="screen">

</style>
