function minPath(array) {
    var localMinPath = Array(array.length).fill(0).map(x => Array(array[0].length).fill(0));

    let x = array.length - 1,
        y = array[0].length - 1;  
    
    while (x >= 0 && y >= 0) {
        for (var i = x; i >= 0; i--) 
            updateLocalMinPath(array, i, y);
        for (var j = y - 1; j >= 0; j--)
            updateLocalMinPath(array, x, j);  
        x--;  
        y--;  
    }
    return localMinPath[0][0];

function updateLocalMinPath(grid, x, y) { 
    if (x == grid.length - 1) {          
        if (y == grid[0].length - 1)
            localMinPath[x][y] = grid[x][y];
        else
            localMinPath[x][y] = localMinPath[x][y + 1] + grid[x][y]; // 7+3 =10
    }
    else if (y == grid[0].length - 1)
        localMinPath[x][y] = localMinPath[x + 1][y] + grid[x][y];
    else
        localMinPath[x][y] = Math.min(localMinPath[x][y + 1], localMinPath[x + 1][y]) + grid[x][y];
}
}

console.log(minPath([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));      // 7
console.log(minPath([[1, 2, 3], [4, 5, 6],[1,0,0],[6,1,1]])); // 7