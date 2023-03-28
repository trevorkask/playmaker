class PathFinder:
    def __init__(self, adjacency_matrix):
        self.adjacency_matrix = adjacency_matrix

    def find_paths(self):
        paths = []
        for i in range(len(self.adjacency_matrix)):
            for j in range(len(self.adjacency_matrix)):
                if self.adjacency_matrix[i][j] == 1:
                    # If there is an edge between i and j, find all paths of at least length 2 starting from i
                    path = [i]
                    self.find_paths_helper(j, path, paths)
        return paths

    def find_paths_helper(self, destination, path, paths):
        if len(path) >= 2 and path[-1] == destination:
            # Found a path of at least length 2
            paths.append(path.copy())
        else:
            # Continue DFS from the last node in the path
            last_node = path[-1]
            for i in range(len(self.adjacency_matrix)):
                if i != last_node and self.adjacency_matrix[last_node][i] == 1:
                    # If there is an edge between last_node and i, continue DFS from i
                    path.append(i)
                    self.find_paths_helper(destination, path, paths)
                    path.pop()
