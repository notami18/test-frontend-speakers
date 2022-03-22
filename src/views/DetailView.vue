<template>
    <section>
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
            <i class="fa-solid fa-plus" style="color:#ffffff"></i>
            &nbsp;&nbsp;
            <span class="text-users-button">Add new todo</span>
        </button>
        <div class="table">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column v-for="column in tableColumns" :key="column.label" v-bind="column"></el-table-column>
                <el-table-column min-width="100px" align="center" label="Completed">
                    <div slot-scope="{ row }" class="d-flex">
                        <div v-if="row.completed">
                            <i class="fa-solid fa-circle-check fa-xl" style="color: green"></i>
                        </div>
                    </div>
                </el-table-column>
                <el-table-column min-width="100px" align="center" label>
                    <div slot-scope="{ row }" class="d-flex">
                        <a @click.prevent="onCheck(row)">Echo</a>
                    </div>
                </el-table-column>
                <el-table-column min-width="100px" align="center" label>
                    <div slot-scope="{ row }" class="d-flex">
                        <a @click.prevent="onDelete(row)">Eliminar</a>
                    </div>
                </el-table-column>
            </el-table>
        </div>
    </section>
</template>

<script>
import { Table, TableColumn } from 'element-ui';
import userServices from '../services/user'

export default {
    name: "DeailView",
    components: {
        [Table.name]: Table,
        [TableColumn.name]: TableColumn
    },
    data() {
        return {
            tableColumns: [
                {
                    prop: 'id',
                    label: 'Id',
                    minWidth: 160,
                    sortable: true
                },
                {
                    prop: 'title',
                    label: 'Title',
                    minWidth: 220,
                    sortable: true
                },
            ],
            tableData: [],
            id: this.$route.params.id,
            userName: null
        }
    },
    mounted() {
        this.userName = localStorage.userName
    },
    async created() {
        const { data } = await userServices.detailUser(this.id);
        this.tableData = data
        console.log(data);
    },
    methods: {
        onCheck(row) {
            this.tableData.map(x => {
                if (x.id === row.id) {
                    x.completed = true
                }
            })
        },

        onDelete(row) {
            let indexToDelete = this.tableData.findIndex(
                tableRow => tableRow.id === row.id
            );
            if (indexToDelete >= 0) {
                this.tableData.splice(indexToDelete, 1);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/style/index.scss";
@import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");
</style>