import sys

args = sys.argv[1:]
for i in args:
    print(i)
    
print("="*20)
print("==== 메뉴 ====")
print("noodle")
print("soup")
print("meat_ball")
print("="*20)

args = sys.argv[1:]
if args[0] == "noddle":
    print("10000원 입니다.")
if args[0] == "soup":
    print("8000원 입니다.")
if args[0] == "meat_balll":
    print("15000원 입니다.")
print("안녕히 가세요.")
