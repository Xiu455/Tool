import concurrent.futures
import time

# 被多線程執行的函數
def worke_func(i):
    time.sleep(1)
    print(f"已執行{i}號線程")

if __name__ == '__main__':
    max_threads = 5     # 最大線程數
    thread_pool = []    # 線程池列表

    start_time = time.time()
    print(f"開始執行多線程")

    # 創建線程池 並指定最大線程數
    with concurrent.futures.ThreadPoolExecutor(max_workers = max_threads) as thread:
        # 將所有要執行的任務放入線程池
        for i in range(0, 10):
            thread_pool.append(thread.submit(worke_func, i + 1))

    concurrent.futures.wait(thread_pool)    # 等待所有線程完成工作

    run_time = time.time() - start_time
    print(f"\n\n所有線程執行完畢 經過時間: {run_time}")