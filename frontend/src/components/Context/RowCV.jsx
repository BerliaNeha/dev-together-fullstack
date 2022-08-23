import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Card, Grid, Table, TableBody } from "@mui/material";
import _ from "lodash";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";
export function RowCV({ allCVs, allDevelopers }) {
  const [currentUser, setCurrentUser] = React.useState(null);
 

  console.log(allCVs, "cvs from the row component");
  // console.log(allDevelopers, " developers from the row component");

  let developerId = [];
  allDevelopers.map((developer) => {
    developerId.push(developer._id);
    return developerId;
  });

  return (
    <React.Fragment>
      {allDevelopers.map((developer) => (
        <>
        
          <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => {
                  currentUser === developer._id
                    ? setCurrentUser(null)
                    : setCurrentUser(developer._id);
                }}
              >
                {developer._id === currentUser ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </TableCell>

            <TableCell component="th" scope="row" align="left">
              {developer.firstName} {developer.lastName}
            </TableCell>
            <TableCell align="left">{developer.jobTitle}</TableCell>
            <TableCell align="left">{developer.email}</TableCell>
          </TableRow>
          {currentUser !== developer._id ? null : (
            <TableCell colSpan={4}>
              <Box
                sx={{
                 
                  p: 4,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    <WorkIcon /> Experience
                  </Typography>
                  {allCVs
                    .filter((cv) => cv.userId === developer._id)
                    .map((cv) =>
                      cv.experience.map(
                        ({ company, position, startDate, endDate }) => (
                          <>
                            {company === "" ? null : (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Box>
                                  <Typography variant="h6">
                                    {position}
                                  </Typography>
                                  <Typography>
                                    {company}{" "}
                                    <span style={{ fontWeight: "bold" }}>
                                      |
                                    </span>{" "}
                                    {new Date(startDate).toLocaleDateString(
                                      "de",
                                      {
                                        month: "2-digit",
                                        year: "numeric",
                                      }
                                    )}{" "}
                                    -{" "}
                                    {new Date(endDate).toLocaleDateString(
                                      "de",
                                      {
                                        month: "2-digit",
                                        year: "numeric",
                                      }
                                    )}
                                  </Typography>
                                </Box>
                              </Box>
                            )}
                          </>
                        )
                      )
                    )}
                </Box>
                <Box>
                  <Typography variant="h5">
                    <SchoolIcon /> Education
                  </Typography>

                  {allCVs
                    .filter((cv) => cv.userId === developer._id)
                    .map((cv) =>
                      cv.education.map(
                        ({
                          schoolName,
                          studies,
                          degree,
                          startDate,
                          endDate,
                        }) => (
                          <>
                            {schoolName === "" ? null : (
                              <>
                                <Typography variant="h6">
                                  {schoolName}
                                </Typography>
                                <Typography>
                                  {studies} | {degree}
                                </Typography>
                                <Typography>
                                  {new Date(startDate).toLocaleDateString(
                                    "de",
                                    {
                                      month: "2-digit",
                                      year: "numeric",
                                    }
                                  )}{" "}
                                  -{" "}
                                  {new Date(endDate).toLocaleDateString("de", {
                                    month: "2-digit",
                                    year: "numeric",
                                  })}
                                </Typography>
                              </>
                            )}
                          </>
                        )
                      )
                    )}
                </Box>

                <Box>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    <CodeIcon /> Skills
                  </Typography>

                  {allCVs
                    .filter((cv) => cv.userId === developer._id)
                    .map((cv) =>
                      cv.skills.map((skill) => (
                        <>
                          <Typography>{skill}</Typography>
                        </>
                      ))
                    )}

                  <Typography variant="h5" sx={{ mt: 4 }}>
                    <LanguageIcon /> Languages
                  </Typography>

                  {allCVs
                    .filter((cv) => cv.userId === developer._id)
                    .map((cv) =>
                      cv.languages.map((language) => (
                        <>
                          <Typography>{language}</Typography>
                        </>
                      ))
                    )}
                </Box>
              </Box>
            </TableCell>
          )}
        </>
      ))}


    </React.Fragment>

    // <React.Fragment>
    //   {allDevelopers.map((developer) => (
    //     <>
    //       <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
    //         <TableCell>
    //           <IconButton
    //             aria-label="expand row"
    //             size="small"
    //             onClick={() => {
    //               currentUser === developer._id
    //                 ? setCurrentUser(null)
    //                 : setCurrentUser(developer._id);
    //             }}
    //           >
    //             {developer._id === currentUser ? (
    //               <KeyboardArrowUpIcon />
    //             ) : (
    //               <KeyboardArrowDownIcon />
    //             )}
    //           </IconButton>
    //         </TableCell>

    //         <TableCell component="th" scope="row" align="left">
    //           {developer.firstName} {developer.lastName}
    //         </TableCell>
    //         <TableCell align="left">{developer.jobTitle}</TableCell>
    //         <TableCell align="left">{developer.email}</TableCell>
    //       </TableRow>
    //       {currentUser !== developer._id ? null : (
    //         <TableRow sx={{border:"1px solid"}}>
    //           <TableCell colSpan={4}>
    //             <Table sx={{ width: "100%" }}>
    //               <TableBody>
    //                 <TableRow>
    //                   <TableCell colSpan={5} sx={{fontWeight:"bold", fontSize:"16px", pt:2}}>Experience</TableCell>
    //                 </TableRow>
    //                 {allCVs
    //                   .filter((cv) => cv.userId === developer._id)
    //                   .map((cv) =>
    //                     cv.experience.map(
    //                       ({ company, position, startDate, endDate }) => (
    //                         <TableRow>
    //                           <TableCell>{company}</TableCell>
    //                           <TableCell>{position}</TableCell>
    //                           <TableCell>
    //                             {new Date(startDate).toLocaleDateString("de", {
    //                               month: "2-digit",
    //                               year: "numeric",
    //                             })}
    //                           </TableCell>
    //                           <TableCell>
    //                             {new Date(endDate).toLocaleDateString("de", {
    //                               month: "2-digit",
    //                               year: "numeric",
    //                             })}
    //                           </TableCell>
    //                           <TableCell />
    //                         </TableRow>
    //                       )
    //                     )
    //                   )}
    //                 <TableRow>
    //                   <TableCell colSpan={5} sx={{fontWeight:"bold", fontSize:"16px", pt:5}}>Education</TableCell>
    //                 </TableRow>
    //                 {allCVs
    //                   .filter((cv) => cv.userId === developer._id)
    //                   .map((cv) =>
    //                     cv.education.map(
    //                       ({
    //                         schoolName,
    //                         studies,
    //                         degree,
    //                         startDate,
    //                         endDate,
    //                       }) => (
    //                         <TableRow>
    //                           <TableCell>{schoolName}</TableCell>
    //                           <TableCell>{studies}</TableCell>
    //                           <TableCell>{degree}</TableCell>
    //                           <TableCell>
    //                             {" "}
    //                             {new Date(startDate).toLocaleDateString("de", {
    //                               month: "2-digit",
    //                               year: "numeric",
    //                             })}
    //                           </TableCell>
    //                           <TableCell>
    //                             {" "}
    //                             {new Date(endDate).toLocaleDateString("de", {
    //                               month: "2-digit",
    //                               year: "numeric",
    //                             })}
    //                           </TableCell>
    //                         </TableRow>
    //                       )
    //                     )
    //                   )}
    //                 <TableRow>
    //                   <TableCell colSpan={4} sx={{fontWeight:"bold", fontSize:"16px", pt:5}}>Skills</TableCell>
    //                 </TableRow>
    //                 {allCVs
    //                   .filter((cv) => cv.userId === developer._id)
    //                   .map((cv) =>
    //                     _.chunk(cv.skills, 5).map((skillsChunk) => (
    //                       <TableRow>
    //                         {skillsChunk.map((skill) => (
    //                           <TableCell>
    //                             {skill}
    //                           </TableCell>
    //                         ))}
    //                       </TableRow>
    //                     ))
    //                   )}
    //                 <TableRow>
    //                   <TableCell colSpan={5} sx={{fontWeight:"bold", fontSize:"16px", pt:2}}>Languages</TableCell>
    //                 </TableRow>
    //                 {allCVs
    //                   .filter((cv) => cv.userId === developer._id)
    //                   .map((cv) =>
    //                     _.chunk(cv.languages, 5).map((languagesChunk) => (
    //                       <TableRow>
    //                         {languagesChunk.map((language) => (
    //                           <TableCell>{language}</TableCell>
    //                         ))}
    //                       </TableRow>
    //                     ))
    //                   )}
    //               </TableBody>
    //             </Table>
    //           </TableCell>
    //         </TableRow>
    //       )}
    //     </>
    //   ))}
    // </React.Fragment>
  );
}
