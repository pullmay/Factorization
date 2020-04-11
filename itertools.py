import itertools

# combinations
# 第一引数: 第一引数にイテラブル(e.g., リストや集合set型)
# 第二引数: 選択する個数
c = itertools.combinations(lst, 2)

print(c)
# <itertools.combinations object at 0x000001CB30DD7DB8>

for v in c:
	print(v)

# (0, 1)
# (0, 2)
# (0, 3)
# (0, 4)
# (1, 2)
# (1, 3)
# (1, 4)
# (2, 3)
# (2, 4)
# (3, 4)
