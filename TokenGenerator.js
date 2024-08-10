import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';

const TokenGenerator = () => {
    const [blueTokens, setBlueTokens] = useState(0);
    const [bluePrefix, setBluePrefix] = useState('');
    const [bluePerRow, setBluePerRow] = useState(5);
    const [redTokens, setRedTokens] = useState(0);
    const [redPrefix, setRedPrefix] = useState('');
    const [redPerRow, setRedPerRow] = useState(5);
    const [generatedTokens, setGeneratedTokens] = useState({ blue: [], red: [] });

    const generateTokens = () => {
        const generateTokenArray = (numTokens, prefix, perRow) => {
            // Create an array of tokens
            const tokens = Array.from({ length: numTokens }, (_, i) => `${prefix}${i + 1}`);
            // Split tokens into rows
            const rows = [];
            for (let i = 0; i < tokens.length; i += perRow) {
                rows.push(tokens.slice(i, i + perRow));
            }
            return rows;
        };

        setGeneratedTokens({
            blue: generateTokenArray(blueTokens, bluePrefix, bluePerRow),
            red: generateTokenArray(redTokens, redPrefix, redPerRow),
        });
    };

    const clearFields = () => {
        setBlueTokens(0);
        setBluePrefix('');
        setBluePerRow(5);
        setRedTokens(0);
        setRedPrefix('');
        setRedPerRow(5);
        setGeneratedTokens({ blue: [], red: [] });
    };

    return (
        <Container>
            <Paper style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Token Generator
                </Typography>
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <TextField
                            label="Number of Blue Tokens"
                            type="number"
                            value={blueTokens}
                            onChange={(e) => setBlueTokens(Number(e.target.value))}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Prefix for Blue Tokens"
                            value={bluePrefix}
                            onChange={(e) => setBluePrefix(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Blue Tokens per Row"
                            type="number"
                            value={bluePerRow}
                            onChange={(e) => setBluePerRow(Number(e.target.value))}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Number of Red Tokens"
                            type="number"
                            value={redTokens}
                            onChange={(e) => setRedTokens(Number(e.target.value))}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Prefix for Red Tokens"
                            value={redPrefix}
                            onChange={(e) => setRedPrefix(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Red Tokens per Row"
                            type="number"
                            value={redPerRow}
                            onChange={(e) => setRedPerRow(Number(e.target.value))}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="success" onClick={generateTokens}>
                            Generate
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={clearFields} style={{ marginLeft: '10px' }}>
                            Clear
                        </Button>
                    </Grid>
                </Grid>

                <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
                    Blue Tokens
                </Typography>
                <div>
                    {Array.isArray(generatedTokens.blue) && generatedTokens.blue.map((row, rowIndex) => (
                        <div key={rowIndex} style={{ marginBottom: '10px' }}>
                            {Array.isArray(row) && row.map((token, tokenIndex) => (
                                <span key={tokenIndex} style={{ display: 'inline-block', width: "50px", height: "30px",padding: "10px 0 0 0", margin:"5px", textAlign: 'center', border: '1px solid red', background:"blue", color:"white", borderRadius: '5px' }}>
                                    {token}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>

                <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
                    Red Tokens
                </Typography>
                <div>
                    {Array.isArray(generatedTokens.red) && generatedTokens.red.map((row, rowIndex) => (
                        <div key={rowIndex} style={{ marginBottom: '10px' }}>
                            {Array.isArray(row) && row.map((token, tokenIndex) => (
                                <span key={tokenIndex} style={{ display: 'inline-block', width: "50px", height: "30px",padding: "10px 0 0 0", margin:"5px", textAlign: 'center', border: '1px solid blue', background:"red", color:"white", borderRadius: '5px' }}>
                                    {token}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </Paper>
        </Container>
    );
};

export default TokenGenerator;
