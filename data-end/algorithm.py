class Main:
    @staticmethod
    def main(args):
        # Table of friends
        iMessage = ["Nic", "Rohit", "Anthony", "Daniel", "Trevor", "Ariam"]
        insta = ["Rohit", "Trevor", "Ariam", "Anthony"]
        snap = ["Rohit", "Nic", "Ariam", "Daniel"]
        whatsapp = ["Trevor", "Daniel", "Anthony", "Max"]

        people = set(iMessage + insta + snap + whatsapp)

        for item in people:
            print(item)
        print()

        hm = {}
        x = 0
        for person in people:
            hm[person] = x
            x += 1

        matrix = [[0 for j in range(len(people))] for i in range(len(people))]
        Main.populate(iMessage, matrix, hm)
        Main.populate(insta, matrix, hm)
        Main.populate(snap, matrix, hm)
        Main.populate(whatsapp, matrix, hm)

        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                print(matrix[i][j], end=" ")
            print()

    @staticmethod
    def populate(arr, matrix, hm):
        for person in arr:
            for neighbor in arr:
                pIndex = hm[person]
                nIndex = hm[neighbor]
                matrix[pIndex][nIndex] = 1
                matrix[nIndex][pIndex] = 1


if __name__ == '__main__':
    Main.main(None)
