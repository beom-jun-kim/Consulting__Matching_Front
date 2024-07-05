module.exports = {
  apps: [
    {
      name: "app-blue",
      script: "npm",
      args: "run serve",
      instance: 1,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 8080, // 블루 인스턴스 포트
      },
      // 기타 설정...
    },
    {
      name: "app-green",
      script: "npm",
      args: "run serve",
      instance: 1,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 8081, // 그린 인스턴스 포트
      },
      // 기타 설정...
    },
  ],
};
