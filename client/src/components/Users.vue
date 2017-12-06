<template>
<div class="container">
<br>
<h4>This is a list of users </h4>
  <div class="row">
    <div class="col-12">
      <vuetable ref="vuetable"
        :api-url="link"
        :fields="fields"
        pagination-path=""
        :per-page="10"
        :multi-sort="true"
        :sort-order="sortOrder"
        @vuetable:pagination-data="onPaginationData">
      </vuetable> 
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

let users = {
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo
  },
  data () {
    return {
      link: "https://rr-test-vlada.herokuapp.com/api/users-table",
      fields: [
        {
          name: 'id',
          sortField: 'id',
        }, 
        {
          name: 'user_name',
          sortField: 'user_name'
        },
        {
          name: 'password',
          sortField: 'password',
        },
        {
          name: 'port',
          sortField: 'port'
        },
        {
          name: 'host',
          sortField: 'host'
        },
        {
          name: 'role',
          sortField: 'role'
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
      apiService.getJournal(data)
          .then((data) => {
              this.setData(data);
          })
          .catch((err) => {
              this.setData()
          })
  },
  methods: {
  getData () {
      this.$http.get('http://rr-test-vlada.herokuapp.com/commands').then(response => {

        // get body data
        console.log(response.body);

      }, response => {
        // error callback
      });
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

Vue.component("users", users);
export default users;
</script>

<style media="screen">

</style>
