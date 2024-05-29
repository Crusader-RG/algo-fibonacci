def fibonacci(n):
  init_list = [0,1]
  if n > 1:
    for i in range(2,n+1):
      init_list += [init_list[i-1] + init_list[i-2]]
  return init_list[n]
