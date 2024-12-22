

export default function useGetPath() {
  function isPathActive(currentPath,pathList=[]) {
    return pathList.includes(currentPath);
  }
 
  return { isPathActive };
}
