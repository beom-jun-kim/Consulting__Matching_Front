<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">Dashboard</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
        <div class="row">
          <div class="col-xl-3 col-md-6">
            <div class="card bg-primary text-white mb-4">
              <div class="card-body">Primary Card</div>
              <div
                class="card-footer d-flex align-items-center justify-content-between"
              >
                <a class="small text-white stretched-link" href="#"
                  >View Details</a
                >
                <div class="small text-white">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="card bg-warning text-white mb-4">
              <div class="card-body">Warning Card</div>
              <div
                class="card-footer d-flex align-items-center justify-content-between"
              >
                <a class="small text-white stretched-link" href="#"
                  >View Details</a
                >
                <div class="small text-white">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="card bg-success text-white mb-4">
              <div class="card-body">Success Card</div>
              <div
                class="card-footer d-flex align-items-center justify-content-between"
              >
                <a class="small text-white stretched-link" href="#"
                  >View Details</a
                >
                <div class="small text-white">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="card bg-danger text-white mb-4">
              <div class="card-body">Danger Card</div>
              <div
                class="card-footer d-flex align-items-center justify-content-between"
              >
                <a class="small text-white stretched-link" href="#"
                  >View Details</a
                >
                <div class="small text-white">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="card mb-4">
              <div class="card-header">
                <i class="fas fa-chart-area me-1"></i>
                Area Chart Example
              </div>
              <div class="card-body">
                <canvas id="myAreaChart" width="100%" height="40"></canvas>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="card mb-4">
              <div class="card-header">
                <i class="fas fa-chart-bar me-1"></i>
                Bar Chart Example
              </div>
              <div class="card-body">
                <canvas id="myBarChart" width="100%" height="40"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-header">
            <i class="fas fa-table me-1"></i>
            DataTable Example
          </div>
          <div class="card-body">
            <table id="datatablesSimple">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <th>김이름</th>
                  <th>포지션</th>
                  <th>사무실</th>
                  <th>나이</th>
                  <th>시작일</th>
                  <th>샐러리</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
    <FooterCom />
  </div>
</template>

<script>
import FooterCom from "../admin/FooterCom.vue";
export default {
  components: { FooterCom },
};
</script>

<style scoped>
@font-face {
  font-family: "Pretendard_ExtraBold";
  src: url("../../../src/common/fonts/PRETENDARD-EXTRABOLD.OTF")
    format("opentype");
}
@font-face {
  font-family: "Pretendard_Medium";
  src: url("../../../src/common/fonts/PRETENDARD-MEDIUM.OTF") format("opentype");
}
@font-face {
  font-family: "Pretendard_SemiBold";
  src: url("../../../src/common/fonts/PRETENDARD-SEMIBOLD.OTF")
    format("opentype");
}
@font-face {
  font-family: "Pretendard_THIN";
  src: url("../../../src/common/fonts/PRETENDARD-THIN.OTF") format("opentype");
}

@font-face {
  font-family: "Pretendard_Rgula";
  src: url("../../../src/common/fonts/PRETENDARD-REGULAR.OTF")
    format("opentype");
}

.preEB {
  font-family: "Pretendard_ExtraBold" !important;
}
.preM {
  font-family: "Pretendard_Medium" !important;
}
.preSB {
  font-family: "Pretendard_SemiBold" !important;
}

.preT {
  font-family: "Pretendard_THIN" !important;
}
.preR {
  font-family: "Pretendard_Rgula" !important;
}
</style>
