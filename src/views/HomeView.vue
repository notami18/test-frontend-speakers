<template>
  <section class="container">
    <div class="bar-horizontal">
      <div class="title-dashboard">
        <span>Dashboard</span>
      </div>
      <span class="avatar"></span>
      <span class="user-name">{{ userName }}</span>
    </div>
    <div class="bar-vertical">
      <h1 class="title-bar">System</h1>
      <nav>
        <ul class="mainMenu">
          <li>
            <a href="#">
              <i class="fa-solid fa-user-group"></i> &nbsp;&nbsp; Users
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <button class="add-users">
      <i class="fa-solid fa-plus" style="color: #ffffff"></i>
      &nbsp;&nbsp;
      <span class="text-users-button">Add new users</span>
    </button>
    <div class="table-users">
      <div class="table">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column v-for="column in tableColumns" :key="column.label" v-bind="column"></el-table-column>
          <el-table-column min-width="100px" align="center" label="Options">
            <div slot-scope="{ row }" class="d-flex">
              <a @click.prevent="onDetails(row)">View todos</a>
            </div>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </section>
</template>

<script>
import { Table, TableColumn } from 'element-ui';
import userServices from '../services/user'
export default {
  name: 'HomeView',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      tableColumns: [
        {
          prop: 'name',
          label: 'Name',
          minWidth: 160,
          sortable: true
        },
        {
          prop: 'username',
          label: 'UserName',
          minWidth: 220,
          sortable: true
        },
        {
          prop: 'email',
          label: 'Email',
          minWidth: 135,
          sortable: true
        },
        {
          prop: 'address',
          label: 'Address',
          minWidth: 200,
          sortable: true
        },
        {
          prop: 'company',
          label: 'Company',
          minWidth: 150,
          sortable: true
        }
      ],
      tableData: [],
      userName: null
    }
  },
  mounted() {
    this.getUsers()
    this.userName = localStorage.userName;
  },

  methods: {
    async getUsers() {
      const { data } = await userServices.user()
      console.log(data)
      this.tableData = data.map(user => {
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          address: `${user.address.city}, ${user.address.street}, ${user.address.suite}`,
          company: user.company.name
        }
      })
    },

    onDetails(row) {
      this.$router.push({
        path: `/users/${row.id}/todos`
      })
    }
  },
}
</script>
<style lang="scss">
@import "../assets/style/index.scss";
@import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");
</style>