import os from 'os';
import v8 from 'v8';

const logOnceSysInfo = () => {
  // Get the number of total memory in GB
  const totalRAM = +(os.totalmem() / 1024 ** 3).toFixed(2);
  // Get the number of available memory in GB
  const freeRAM = +(os.freemem() / 1024 ** 3).toFixed(2);
  // Reset application start time on restart
  const appStartTime = Date.now();
  // Get available heap memory in GB
  const totalHeap = (v8.getHeapStatistics().total_available_size / 1024 ** 3).toFixed(2);

  console.info(
    `[sysinfo] RAM: Avaliable ${freeRAM} GB of ${totalRAM} GB total.\n[sysinfo] HEAP: ${totalHeap} GB total.\n[sysinfo] Application start time: ${new Date(
      appStartTime,
    ).toLocaleString('es-CL')} | ${appStartTime}`,
  );
};

export { logOnceSysInfo };
