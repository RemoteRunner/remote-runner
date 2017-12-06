<template>
<div class="container">
<h4>List of commands by all users</h4>
  <div class="row">
    <div class="col-12 holder-admin-journal">
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
import accounting from "accounting";
import moment from "moment";
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo";

let adminJournal = {
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo
  },
  data() {
    return {
      link: "https://rr-test-vlada.herokuapp.com/api/journal-user-table",
      fields: [
        {
          name: 'record_id',
          sortField: 'record_id',
        }, 
        {
          name: 'user_name',
          sortField: 'user_name'
        },
        {
          name: 'command',
          sortField: 'command'
        },
        {
          name: 'date',
          sortField: 'date'
        },
        {
          name: 'params',
          sortField: 'params'
        },
        {
          name: 'data',
          sortField: 'data'
        },
      ],
      sortOrder: [
        {
          field: "email",
          sortField: "email",
          direction: "asc"
        }
      ]
    };
  },
  methods: {
    getData() {
      this.$http.get("http://rr-test-vlada.herokuapp.com/commands").then(
        response => {
          // get body data
          console.log(response.body);
        },
        response => {
          // error callback
        }
      );
    },
    allcap(value) {
      return value.toUpperCase();
    },
    genderLabel(value) {
      return value === "M"
        ? '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
        : '<span class="ui pink label"><i class="large woman icon"></i>Female</span>';
    },
    formatNumber(value) {
      return accounting.formatNumber(value, 2);
    },
    formatDate(value, fmt = "D MMM YYYY") {
      return value == null ? "" : moment(value, "YYYY-MM-DD").format(fmt);
    },
    onPaginationData(paginationData) {
      this.$refs.paginationTop.setPaginationData(paginationData);
      this.$refs.paginationInfoTop.setPaginationData(paginationData);
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    }
  }
};

Vue.component("admin-journal", adminJournal);
export default adminJournal;
</script>

<style media="screen">
div.holder-admin-journal {
  overflow: auto;
}
</style>
